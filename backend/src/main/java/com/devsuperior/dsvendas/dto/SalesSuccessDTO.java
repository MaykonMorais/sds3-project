package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SalesSuccessDTO implements Serializable {
private static final long serialVersionUID = 1L;
	
	private String sellerName;
	private Long visited;
	private Long deals;
	
	public SalesSuccessDTO(Seller seller, Long visited, Long deals) {
		sellerName = seller.getName();
		this.visited = visited;
		this.deals = deals;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public String getSellerName() {
		return sellerName;
	}

	public Long getVisited() {
		return visited;
	}

	public Long getDeals() {
		return deals;
	}
}
