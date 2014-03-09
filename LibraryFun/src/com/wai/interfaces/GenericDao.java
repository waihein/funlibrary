package com.wai.interfaces;

import java.io.Serializable;
import java.util.List;

public interface GenericDao<T, PK extends Serializable> {
	
	public abstract void create( T object);
	public abstract List<T> retrieve();
	public abstract T retrieve(T object);
	public abstract void delete(T object);
	public abstract void update(T object);

}
