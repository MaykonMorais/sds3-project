package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SalesSumDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String sellerName;
	private double sum;
	
	public SalesSumDTO(Seller seller, double sum) {
		sellerName = seller.getName();
		this.sum = sum;
	}

	public String getSellerName() {
		return sellerName;
	}

	public double getSum() {
		return sum;
	}
}
