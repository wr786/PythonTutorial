# @property

## 为什么要使用property？

在绑定属性时，如果我们直接把属性暴露出去，虽然写起来简单，但是没法检查参数：

```python
senpai = Student()
senpai.score = 114514	# 分数哪能这么高！
```

所以我们可以自己创建两个方法`get_score()`和`set_score()`：（这里命名是可以随意起的，不一定要这种格式）

```python
class Student():
    
	def get_score(self):
		return self._score
    
	def set_score(self, score):
		if not isinstance(score, int):
			raise ValueError('[ERROR] 分数必须是整数！')
		if score < 0 or score > 100:
			raise ValueError('[ERROR] 分数必须在0~100间!')
		self._score = score
```

其中，`_score`前的`_`代表这是一个私有成员，不能直接被访问。

但是上面这也太复杂了。

此外，我们的类可能有一些属性是可以根据另一些属性通过表达式计算出来的，我们也没必要专门为它写函数，这太不方便了。

## 使用@property

直接看例子罢：

```python
class Student():

    @property
    def birth(self):
        return self._birth

    @birth.setter
    def birth(self, value):
        self._birth = value

    @property
    def age(self):
        return 2020 - self._birth
```

我们可以通过在`birth`方法前加上`@property`修饰器，使得我们可以直接使用`senpai.birth`达到`senpai.birth()`的效果。

此外，可以在另一个`birth`方法前加上`@birth.setter`修饰器，使得这个方法变成属性赋值。那么我们就可以通过`senpai.birth = 1926`来设置`senpai._birth`。并且我们可以在这个`birth`方法中加入和上面类似的检测机制。

此外，我们可以通过在`age`方法前加上`@property`修饰器，使`senpai.age`能够获得到`2020 - senpai._birth`的效果，这显然是比写一个`get_age()`方法要直观的。