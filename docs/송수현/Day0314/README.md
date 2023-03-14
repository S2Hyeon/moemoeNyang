## 타입스크립트는 쓰는 이유

### 기존 자바스크립트

```
function add(num1, num2) {
  console.log(num1 + num2);
}

add();                    // NaN
add(1);                   // NaN
add(1, 2);                // 3
add(3, 4, 5);             // 7
add('hello', 'world');    // "helloworld"
```

```
function showItems(arr) {
  arr.forEach((item) => {
    console.log(item);
  });
}

showItem([1,2,3]);    // 1, 2, 3
showItem(1,2,3);      // Reference Error
```

- 실수가 분명한 코드임에도 Error 없이 실행됨
- JavaScript (동적 언어) : 런타임에 타입 결정 / 오류 발견
- Java, typeScript (정적 언어) : 컴파일 타임에 타입 결정 / 오류 발견

### typeScript로 변경

```
function add(num1:number, num2:number) {
  console.log(num1 + num2);
}
```

```
function showItems(arr:number[]) {
  arr.forEach((item) => {
    console.log(item);
  });
}
```

---

## 기본 타입

```
let age:number = 30;
let isAdult:boolean = true;

// number 배열
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

// string 배열
let week1:string[] = ['mon', 'tue', 'wed'];
let week2:Array<string> = ['mon', 'tue', 'wed'];

// 튜플 (Tuple)
let b:[string, number];
b = ['z', 1];

// void : 아무것도 반환하지 않는 함수에 사용
function sayHello():void {
  console.log('hello');
}

// never : 항상 Error를 반환하거나, 끝나지 않는 함수의 타입으로 사용
function showError():never {
  throw new Error();
}

function infLoop():never {
  while(true) {
    // do something...
  }
}

// enum : 비슷한 값들의 묶음
enum Os {
  Window,
  Ios,
  Android
}

// null, undefined
let a:null = null;
let b:undefined = undefined;
```

---

## 인터페이스 (Interface)
