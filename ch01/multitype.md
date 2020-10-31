# 组合数据类型

python中基本组合数据类型有列表、tuple、map与set，在本章中我们只谈列表与tuple。

## 列表list

在python中，我们可以如下定义一个列表：

```python
x = [1, 1, 4, 5, 1, 4]
print(x[0])		# 1
print(x[1:3])	# [1, 4]
```

我们可以看到，列表中的元素是可以重复的。且访问列表元素的过程类似字符串。（其实可以将字符串理解为字符的列表）

我们还可以这样定义一个列表：

```python
y = [1, 'a']
```

也就是说，列表中的类型是可以不同的

我们可以通过`append()`来向列表中添加成员：

```python
x = []	# 这样表示一个空列表
x.append(8)
print(x) 	# [8]
x.append(1)
print(x) 	# [8, 1]
x.append(0)
print(x)	# [8, 1, 0]
```

我们可以使用`sort()`来排序列表中的元素：

```python
x = [1, 1, 4, 5, 1, 4]
x.sort()
print(x)	# [1, 1, 1, 4, 4, 5]

x.sort(reverse=True)	# 可以向参数reverse传入True，反序排序
print(x)	# [5, 4, 4, 1, 1, 1]
```

## 元组tuple

tuple与列表很类似，但是tuple的值是**不可修改**的。

```python
x = [1, 1, 4, 5, 1, 4]
xTuple = (1, 1, 4, 5, 1, 4)	# 列表用[]，tuple用()
print(xTuple[0])	# 1
print(xTuple[1:3])	# [1, 4]

emptyLst = []	# 空列表
emptyTuple = ()	# 空tuple

oneLst = [786]	# 只有一个成员的列表
oneTuple = (786, )	# 只有一个成员的tuple
```

注意到，声明只有一个成员的tuple时，我们需要声明为`(786, )`，这里有一个额外的逗号。试思考为什么这里要加一个逗号，如果去掉逗号的话会怎么样。

我们可以如是定义嵌套的list与tuple：

```python
listA = [["李田所", 114514], ["唐泽贵洋", "puripuri"]]
listB = (["李田所", 114514], ["唐泽贵洋", "puripuri"])
listC = (("李田所", 114514), ("唐泽贵洋", "puripuri"))
listD = [("李田所", 114514), ("唐泽贵洋", "puripuri")]
```

需要注意的是，嵌套在list中的tuple仍然**不可修改**，但是嵌套在tuple中的list是**可以修改**的，这与数据在计算机中的存储有关，这里不深谈。

## in

`in`与`not in`常用于列表、tuple和字符串，用来判断某个元素是否存在。如：

```python
x = [1, 1, 4, 5, 1, 4]
print(1 in x)	# True
print(114514 in x)	# False

strCourse = "机械设计基础太卷了！"
print("卷" in strCourse)	# True
print("卷" not in strCourse)	# False
```

## 练习

1. 尝试创建一个列表，它是3×3的（即[ [, , ], [, , ], [, , ] ]），且每个成员分别对应着手机九键拼音输入法上的字母。
2. 思考如何将一个list转换为tuple，如何将一个tuple转换为一个list。（提示：联想我们前几节之中读入数据时是怎么进行类型转换的）