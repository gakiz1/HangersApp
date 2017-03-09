package com.hangers.pojo;

import java.sql.Date;

public class Item {
	private String itemCode;
	private String itemBrand;
	private float itemPrice;
	private String itemCategory;
	private float sellingPrice;
	private String size;
	private Date dateIn;
	private Date dateOut;
	public String getItemCode() {
		return itemCode;
	}
	public void setItemCode(String itemCode) {
		this.itemCode = itemCode;
	}
	public String getItemBrand() {
		return itemBrand;
	}
	public void setItemBrand(String itemBrand) {
		this.itemBrand = itemBrand;
	}
	public float getItemPrice() {
		return itemPrice;
	}
	public void setItemPrice(float itemPrice) {
		this.itemPrice = itemPrice;
	}
	public String getItemCategory() {
		return itemCategory;
	}
	public void setItemCategory(String itemCategory) {
		this.itemCategory = itemCategory;
	}
	public float getSellingPrice() {
		return sellingPrice;
	}
	public void setSellingPrice(float sellingPrice) {
		this.sellingPrice = sellingPrice;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public Date getDateIn() {
		return dateIn;
	}
	public void setDateIn(Date dateIn) {
		this.dateIn = dateIn;
	}
	public Date getDateOut() {
		return dateOut;
	}
	public void setDateOut(Date dateOut) {
		this.dateOut = dateOut;
	}
	public Item(String itemCode, String itemBrand, float itemPrice,
			String itemCategory, float sellingPrice, String size,
			Date dateIn, Date dateOut) {
		super();
		this.itemCode = itemCode;
		this.itemBrand = itemBrand;
		this.itemPrice = itemPrice;
		this.itemCategory = itemCategory;
		this.sellingPrice = sellingPrice;
		this.size = size;
		this.dateIn = dateIn;
		this.dateOut = dateOut;
	}
	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Item [itemCode=" + itemCode + ", itemBrand=" + itemBrand
				+ ", itemPrice=" + itemPrice + ", itemCategory=" + itemCategory
				+ ", sellingPrice=" + sellingPrice + ", size=" + size
				+ ", dateIn=" + dateIn + ", dateOut=" + dateOut + "]";
	}
	
}
