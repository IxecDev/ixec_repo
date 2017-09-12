/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package youtuberetriever;

import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;

import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.ResourceId;
import com.google.api.services.youtube.model.SearchListResponse;
import com.google.api.services.youtube.model.SearchResult;
import com.google.api.services.youtube.model.Thumbnail;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;

/**
 *
 * @author gbmobile2
 */
public class YoutubeRetriever {

  public static final HttpTransport HTTP_TRANSPORT = new NetHttpTransport();
  public static final JsonFactory JSON_FACTORY = new JacksonFactory();

  private static final String PROPERTIES_FILENAME = "youtube.properties";

  private static final long NUMBER_OF_VIDEOS_RETURNED = 5;

  private static YouTube youtube;
  
  /**
   * @param args the command line arguments
   */
  public static void main(String[] args) {
    // Get API Key from external file
    Properties properties = new Properties();

    try {
      InputStream in = new FileInputStream(new File("/Users/gbmobile2/Documents/" + PROPERTIES_FILENAME));
      properties.load(in);

    } catch (IOException e) {
      System.err.println("There was an error reading " + PROPERTIES_FILENAME + ": " + e.getCause()
              + " : " + e.getMessage());
      System.exit(1);
    }

    // Retrieve data from YouTube
    try {
      // Initialize YouTube Object
      youtube = new YouTube.Builder(HTTP_TRANSPORT, JSON_FACTORY, new HttpRequestInitializer() {
        public void initialize(HttpRequest request) throws IOException {
        }
      }).setApplicationName("youtube-cmdline-search-sample").build();

      YouTube.Search.List search = youtube.search().list("snippet");
      String apiKey = properties.getProperty("youtube.apikey");
      String channelId = properties.getProperty("youtube.channelid");
      
      // Set parameters
      search.setKey(apiKey);
      search.setChannelId(channelId);
      search.setType("video");
      search.setFields("items(id/kind,id/videoId,snippet/description,snippet/thumbnails/default/url,snippet/title),kind,nextPageToken,prevPageToken");
      search.setMaxResults(NUMBER_OF_VIDEOS_RETURNED);

      // Call the API and print results.
      SearchListResponse searchResponse = search.execute();
      List<SearchResult> searchResultList = searchResponse.getItems();
      
      // Print results
      if (searchResultList != null) {
        for(SearchResult result: searchResultList) {
          
          System.out.println("Video ID: " + result.getId().getVideoId());
          System.out.println("Video Name: " + result.getSnippet().getTitle());
          System.out.println("Video Description: " + result.getSnippet().getDescription());
          System.out.println("Thumbnail URL: " + result.getSnippet().getThumbnails().getDefault().getUrl());
          
          System.out.println("\n-------------------------------------------------------------\n");
          
        }
      }
    } catch (GoogleJsonResponseException e) {
      System.err.println("There was a service error: " + e.getDetails().getCode() + " : "
              + e.getDetails().getMessage());
    } catch (IOException e) {
      System.err.println("There was an IO error: " + e.getCause() + " : " + e.getMessage());
    } catch (Throwable t) {
      t.printStackTrace();
    }
  }
  
}
