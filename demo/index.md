---
page: false
---

# Components

## Lists

1. First item
2. Second item
3. Third item
4. Fourth item

- First item
- Second item
- Third item
- Fourth item

- First item
- Second item
  - Additional item
  - Additional item
- Third item

| Property | Description                           |
| -------- | ------------------------------------- |
| Name     | Full name of user                     |
| Age      | Reported age                          |
| Joined   | Whether the user joined the community |

```java HelloWorld.java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

<CodeGroup>

```javascript helloWorld.js
console.log("Hello World");
```

```python hello_world.py
print('Hello World!')
```

```java HelloWorld.java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

</CodeGroup>

## Icons

<font-awesome-icon icon="user" />
<font-awesome-icon icon="house" />
<FontAwesomeIcon icon="coffee" />

## Callouts

demo boxes

<Info>INFO draws attention to important information `python`</Info>
<Tip title="DEMO">Tip suggests a helpful tip `python`</Tip>
<Error>Error adds a note in the content `python`</Error>
<Check>Check brings us a checked status `python`</Check>
<Note>Note adds a note in the content `python`</Note>
<Warning>Warning raises a warning to watch out for `python`</Warning>

<Info>

INFO draws attention to important information `python`

</Info>
<Tip title="DEMO">

Tip suggests a helpful tip `python`

</Tip>
<Error>

Error adds a note in the content `python`

</Error>
<Check>

Check brings us a checked status `python`

</Check>
<Note>

Note adds a note in the content `python`

</Note>
<Warning>

Warning raises a warning to watch out for `python`

</Warning>

## Cards

<Card title="Colored Card" icon="feather" iconType="duotone" color="#ca8b04" href="#">
  Here is a card with a duotone yellow icon
</Card>

<CardGroup :cols="2">
  <Card title="First Card" icon="envelope" color="#ea5a0c" href="#">
    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
  </Card>
  <Card title="Second Card" icon="coffee" color="#0285c7" href="#">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </Card>
  <Card title="Third Card" icon="feather" color="#16a34a" href="#">
    Ut enim ad minim veniam, quis nostrud exercitation ullamco
  </Card>
  <Card title="Fourth Card" icon="user-secret" color="#dc2626" href="#">
    Excepteur sint occaecat cupidatat non proident
  </Card>
</CardGroup>
