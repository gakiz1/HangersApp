package com.hangers.data;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.hangers.constants.DigitalDiningConstants;
import com.hangers.pojo.Item;


public class DatabaseServices {
	private final static String ADD_STOCK_QUERY="INSERT INTO STOCKIN VALUES(?,?,?,?,?,?,?)";
	private static String dropQuery = "DESC  table STOCKIN";
	
	
	public static String CreateTable()throws ClassNotFoundException, URISyntaxException, SQLException {
		
		Connection connection = DatabaseConnectivity.getConnected();
		if (connection != null) {
			Statement st = connection.createStatement();
			ResultSet rs = st.executeQuery(dropQuery);
			String result=rs.toString();
			System.out.println("Query executed!");
			connection.close();
			return "DB : "+result;
		}else{
			return "Failed to connect to db";
	    }
	}
	public static String addStock(Item item)
			throws ClassNotFoundException, URISyntaxException, SQLException {
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        String result;
		Connection connection = DatabaseConnectivity.getConnected();
		if (connection != null) {
			Statement st = connection.createStatement();
            String sqlQuery = ADD_STOCK_QUERY;
            preparedStatement = connection.prepareStatement(sqlQuery);
            preparedStatement.setString(1, item.getItemCode());
            preparedStatement.setString(2, item.getItemType());
            preparedStatement.setString(3, item.getBrand());
            preparedStatement.setInt(4, item.getQuantity());
            preparedStatement.setFloat(5, item.getPriceIn());
            preparedStatement.setDate(6, item.getDateIn());
            
            resultSet = preparedStatement.executeQuery();
            if (resultSet != null) {
            	System.out.println("successfull!");
            	 result="successfully Added the stock";
              
            } else {
	            System.out.println("Failed!");
	             result="Failed.. ";
            }

			
			connection.close();
			return result;
		}
		else
			return "Connection Failed";

	}
	
	public static JSONArray getAllItems() throws ClassNotFoundException, URISyntaxException, SQLException, JSONException{
		Connection connection = DatabaseConnectivity.getConnected();
		JSONArray jsonArray = new JSONArray();
		if (connection != null) {
			Statement st = connection.createStatement();
			String query = "SELECT * FROM ITEMS";
			ResultSet rs = st.executeQuery(query);
			while(rs.next()){
				JSONObject jsonObject = new JSONObject();
				jsonObject.put(DigitalDiningConstants.ITEM_NUMBER, rs.getString(1));
				jsonObject.put(DigitalDiningConstants.ITEM_NAME, rs.getString(2));
				jsonObject.put(DigitalDiningConstants.ITEM_PRICE, rs.getString(3));
				jsonObject.put(DigitalDiningConstants.ITEM_CATEGORY, rs.getString(4));
				jsonArray.put(jsonObject);
			}
		}
		connection.close();
		return jsonArray;
	}
	
	public static String deleteItem(String itemNumber) throws ClassNotFoundException, URISyntaxException, SQLException{
		Connection connection = DatabaseConnectivity.getConnected();
		if(connection!=null){
			Statement st = connection.createStatement();
			String deleteQuery = "DELETE FROM ITEMS WHERE ITEM_NUMBER='"+itemNumber+"';";
			st.executeUpdate(deleteQuery);
			connection.close();
		}
	return "Success";
	}

}
