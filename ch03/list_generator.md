# 列表生成式

## 什么是列表生成式

列表生成式是Python内置的可以用来创建list的生成式。

比如，如果我们想要生成`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`可以直接用`list(range(1, 11))`。但是这并不能很好地体现列表生成式的特点，我们不妨改写成：

```python
[i for i in range(1, 11)]
```

我们在外面加了`[`和`]`来代表这要生成一个列表，然后用`i for i in range(1, 11)`表示了它里面的元素是什么。

那么类似地，如果我们想要得到一个数组`[1, 4, 9, 16, 25, ..., 100]`，我们可以直接

```python
[i*i for i in range(1, 11)]
```

再比如我们想要得到10以内的奇数的三次方的列表`[1, 27, 125, 343, 729]`，我们可以直接利用`if`：

```python
[i ** 3 for i in range(10) if i % 2]
```

此外，我们当然也可以：

```python
[m + n for m in 'ABC' for n in 'XYZ']
```

来生成`['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']`了。

## 应用列表生成式

### Where my anagrams at? (Codewars)

> What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
>
> ```python
> 'abba' & 'baab' == true
> 
> 'abba' & 'bbaa' == true
> 
> 'abba' & 'abbba' == false
> 
> 'abba' & 'abca' == false
> ```
>
> Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
>
> ```python
> anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
> 
> anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
> 
> anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
> ```

我们很容易写出：

```python
def anagrams(word, words):
    return [x for x in words if sorted(x) == sorted(word)]
```

### Array diff(codewars)

简单来说就是找出两个数组中的不同。

我们很容易写出：

```python
def array_diff(a, b):
    return [x for x in a if x not in b]
```

### (随便编的题)

假设我们需要读入一行英文，然后逆序输出所有的单词并将所有字母变为小写。示例：

>Input: 
>
>I am a student of COE
>
>Output: 
>
>coe of student a am i

很简单，我们只要这样写：

```python
print(' '.join([x.lower() for x in input().split()][::-1]))
```

我们来分析以下这行代码的意思：

1. 我们首先用`input().split()`来将读入的一行英文分词为list`['I', 'am', 'a', 'student', 'of', 'COE']`。

2. 然后利用列表生成式，对每个单词进行小写`lower()`函数来获取它的小写。

3. 然后利用切片`[::-1]`来获取逆序的列表。

4. 再用`' '.join()`来安插空格，就得到了结果。

