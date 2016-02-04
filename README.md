# zappy
Create complex objects rapidly from strings. 

### Make

`var obj = zappy.tree('obj1.obj2.data', 20);`

### Instead of

```js
var obj = {
	obj1: {
		obj2: {
			data: 20;
		}
	}
}
```

### Useful for

- Defining quickly fake data for unit testing
- Whatever you want



