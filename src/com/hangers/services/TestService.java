package com.hangers.services;

import java.net.URISyntaxException;
import java.sql.SQLException;
import java.util.HashMap;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.json.JSONException;
import org.json.JSONObject;

import com.hangers.constants.DigitalDiningConstants;
import com.hangers.data.DatabaseServices;
import com.hangers.pojo.Item;

@Path("/rest")
public class TestService {
	@GET
	@Path("/ping")
	public String ping() {
		return "working fine...";
	}

	@POST
	@Path("/insertNewItem")
	public String insertNewItem(Item item) {
		try {
			
			if(item==null){
				
				return "item is null";
			}else{
				
				return DatabaseServices.insertToDB(item);	
			}
			
			
		} catch (Exception e) {
			System.out.println("JSONException : " + e);
			return "JSONException : " + e;
		} 
	}
	
	@GET
	@Path("/getAll")
	@Produces(MediaType.TEXT_PLAIN)
	public String getAllItems(){
		String result = null;
		try {
			result = DatabaseServices.getAllItems().toString();
		} catch (ClassNotFoundException | URISyntaxException | SQLException
				| JSONException e) {
			e.printStackTrace();
		}
		return result;
	}
	
	@GET
	@Path("/delete/{itemNumber}")
	public String deleteItem(@PathParam("itemNumber") String itemNumber) throws ClassNotFoundException, URISyntaxException, SQLException{
		return DatabaseServices.deleteItem(itemNumber);
	}
	@GET
	@Path("/createTable")
	public String createTable(){
		try{
		return DatabaseServices.CreateTable();
	}catch(Exception e){
		return 
				"Failed : "+e;
	}
	}
	
	
}