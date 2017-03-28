package com.hangers.data;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
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
	private static String DECREMENT_QUANTITY_QUERY ="UPDATE STOCKIN SET QUANTITY=QUANTITY - ? WHERE ITEM_CODE=? ";
	private final static String ADD_SELL_QUERY="INSERT INTO STOCKOUT VALUES(?,?,?,?,?)";
	
	
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
            preparedStatement.setString(5, item.getSize());
            preparedStatement.setFloat(6, item.getPriceIn());
            preparedStatement.setDate(7, item.getDateIn());
            
            int rs = preparedStatement.executeUpdate();
            if (rs != 0) {
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
	
	public static String sell(Item item)
			throws ClassNotFoundException, URISyntaxException, SQLException {
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        String result;
        String results="default";
		Connection connection = DatabaseConnectivity.getConnected();
		if (connection != null) {
			Statement st = connection.createStatement();
            String sqlQuery = DECREMENT_QUANTITY_QUERY;
            
    
            preparedStatement = connection.prepareStatement(sqlQuery);
            preparedStatement.setInt(1, item.getQuantity());
            preparedStatement.setString(2, item.getItemCode());
            int rs = preparedStatement.executeUpdate();
           
            if (rs != 0) {
            	System.out.println("successfull!");
            	 result="successfully Sold...";
            	sqlQuery =ADD_SELL_QUERY; 
            	
            	Date date= new Date();
                String transactionId="H"+date;
                
            	preparedStatement = connection.prepareStatement(sqlQuery);
                
                preparedStatement.setString(1, item.getItemCode());
                preparedStatement.setInt(2, item.getQuantity());
                preparedStatement.setFloat(3, item.getPriceOut());
                preparedStatement.setDate(4, item.getDateOut());
                preparedStatement.setString(5, transactionId);
                
               
                
                int rst = preparedStatement.executeUpdate();
                
                if(rst != 0){
                 results="Successfully added to the Stock Out table";
                }else{
                	results="Failed to add to the Stock out table ";
                }
            	
              
            } else {
	            System.out.println("Failed!");
	             result="Failed.. ";
            }

			
			connection.close();
			return result+""+rs+results;
		}
		else
			return "Connection Failed";

	}

	public static JSONArray getAllItems() throws ClassNotFoundException, URISyntaxException, SQLException, JSONException{
		Connection connection = DatabaseConnectivity.getConnected();
		JSONArray jsonArray = new JSONArray();
		if (connection != null) {
			Statement st = connection.createStatement();
			String query = "SELECT * FROM STOCKIN";
			ResultSet rs = st.executeQuery(query);
			while(rs.next()){
				JSONObject jsonObject = new JSONObject();
				jsonObject.put("item code", rs.getString(1));
				jsonObject.put("Item type", rs.getString(2));
				jsonObject.put("brand", rs.getString(3));
				jsonObject.put("quantity", rs.getString(4));
				jsonObject.put("size", rs.getString(5));
				jsonObject.put("price In", rs.getString(6));
				jsonObject.put("date In", rs.getString(7));
				
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
