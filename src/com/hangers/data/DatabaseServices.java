package com.hangers.data;

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

public class DatabaseServices {
	private static String createQuery = "CREATE TABLE USER("
			+ "USER_NAME CHAR(50) PRIMARY KEY NOT NULL,"
			+ "PASSWORD CHAR(50)  NOT NULL,";
	public static String CreateTable()throws ClassNotFoundException, URISyntaxException, SQLException {
		
		Connection connection = DatabaseConnectivity.getConnected();
		if (connection != null) {
			Statement st = connection.createStatement();
			st.execute(createQuery);
			System.out.println("Query executed!");
			connection.close();
			return "Success";
		}else{
			return "Failed";
	    }
	}
	public static String insertToDB(HashMap<String, String> newItem)
			throws ClassNotFoundException, URISyntaxException, SQLException {
		
		Connection connection = DatabaseConnectivity.getConnected();
		if (connection != null) {
			Statement st = connection.createStatement();
			String insertQuery = "INSERT INTO ITEMS VALUES('"
					+ newItem.get(DigitalDiningConstants.ITEM_NUMBER)+"','"
					+ newItem.get(DigitalDiningConstants.ITEM_NAME)+"','"
					+ newItem.get(DigitalDiningConstants.ITEM_PRICE)+"','"
					+ newItem.get(DigitalDiningConstants.ITEM_CATEGORY)+"')";
			st.execute(insertQuery);
			System.out.println("Query executed!");
			connection.close();
			return "Success";
		}
		else
			return "Failed";

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
