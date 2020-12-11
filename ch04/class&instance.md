# 类与实例

## 类与实例的创建

我们可以如是定义一个类：

```python
class Student():
    pass
```

并如是创建一个实例：

```python
senpai = Student()
```

## 类与实例的属性绑定

### 给实例绑定属性

与C++不同，我们可以自由地给一个实例变量绑定属性：

```python
senpai.name = "ys"
print(senpai.name)
```

我们为实例绑定的属性并不会影响到其他的实例，如：

```python
senpai = Student()
tooiya = Student()
senpai.name = "ys"
print(tooiya.name)
```

会出现`AttributeError`:

> Traceback (most recent call last):
>   File "<stdin>", line 1, in <module>
> AttributeError: Student instance has no attribute 'name'

### 给类绑定属性

而我们可以这样给一个类的**本身**绑定属性：

```python
class Student():
    name = 'Student'
```

这种属性是类属性，归类所有，但是它的所有实例也可以访问到。

```python
senpai = Student()
print(senpai.name)	# 因为senpai没有name属性，所以会查找它class的name属性
# 结果: Student
senpai.name = "ys"
print(senpai.name)
# 结果：ys
print(Student.name)
# 结果: Student
del senpai.name	# 删除senpai的name属性
print(senpai.name)
# 结果：Student
```

## 类方法

### `__init__`

```python
class Student():

	def __init__(self, name, score=100):
		self.name = name
		self.score = score
	
	def az(self):
		print("az?")

	def az2():
		print("az!")

senpai = Student("yy")
print(f"{senpai.name}: {senpai.score}")
senpai.az()
Student.az2()
```

> yy: 100
> az?
> az!

注意到`__init__`方法的第一个参数永远是`self`，表示创建的实例本身，因此，在`__init__`方法内部，就可以把各种属性绑定到`self`，因为`self`就指向创建的实例本身。

然后我们在创建实例的时候，并不需要传入`self`，Python会自己把实例变量传进去。

### `__str__`

我们可以利用`__str__`将上面的代码改写为：

```python
class Student():

	def __init__(self, name, score=100):
		self.name = name
		self.score = score
	
	def __str__(self):
		return f"{self.name}: {self.score}"

senpai = Student("yy")
print(senpai)
```

写了`__str__`之后，就可以利用`str(senpai)`获得`senpai`中的`__str__`方法的返回值了。

### `__cmp__`

Python 3.4 之后作废了`__cmp__`方法，分成了`__lt__、__gt__、__le__、__ge__、__eq__、__ne__`六个方法。（分开这一步是在Python 2.1完成的）

那么我们只介绍其中的`__lt__`，也就是小于，我们不妨以这一道题为例:

<img src="C:\Users\wr786\AppData\Roaming\Typora\typora-user-images\image-20201212004616015.png" alt="image-20201212004616015" style="zoom:50%;" />

虽然我们仅仅想要做出这道题的话，没必要大动干戈面向对象。但是面向对象写着爽啊！

```python
class Good(): # 商品类
	
	def __init__(self, args):
		self.name = args[0]
		rates = [int(x) for x in args[1:]]
		self.rate = sum(rates) / len(rates)
		self.usrc = len(rates)

	def __lt__(self, other):
		if self.rate > other.rate:
			return True
		elif self.rate < other.rate:
			return False
		else:
			if self.usrc > other.usrc:
				return True
			else:
				return False

	def __str__(self):
		return self.name

t = int(input())
for _ in range(t):
	goodlist = []
	n = int(input())
	for _ in range(n):
		goodlist.append(Good(input().split()))
	goodlist.sort()
	for good in goodlist:
		print(good)
```

可以看到结果也是正确的。

<img src="C:\Users\wr786\AppData\Roaming\Typora\typora-user-images\image-20201212010154215.png" alt="image-20201212010154215" style="zoom: 50%;" />