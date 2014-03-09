package com.wai.daoimpl;

import java.io.Serializable;
import java.util.List;

import com.wai.interfaces.GenericDao;

public class GenericDaoImpl<T, PK extends Serializable> implements GenericDao<T, PK> {

	@Override
	public void create(T object) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<T> retrieve() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public T retrieve(T object) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(T object) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void update(T object) {
		// TODO Auto-generated method stub
		
	}

	
}
