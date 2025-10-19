export interface Article {
    slug: string
    title: string
    description: string
    date: string
    topics: string[]
    content: {
        introduction: string
        sections: {
            heading: string
            content: string
            codeExample?: string
        }[]
        conclusion: string
    }
}

export const articles: Article[] = [
    {
        "slug": "understanding-javascript-closures",
        "title": "Hiểu về Closures trong JavaScript",
        "description": "Tìm hiểu sâu về closures, phạm vi từ vựng và cách chúng hỗ trợ các mẫu JavaScript hiện đại như modules và callbacks.",
        "date": "Tháng 3, 2024",
        topics: ["Closures", "Scope", "Functions"],
        "content": {
            "introduction": "Closures là một trong những khái niệm mạnh mẽ và thường bị hiểu nhầm nhất trong JavaScript. Hiểu về closures là điều cần thiết để viết code sạch, hiệu quả và thành thạo các mẫu JavaScript nâng cao.",
            "sections": [
                {
                    "heading": "Closures là gì?",
                    "content": "Closure là một hàm có quyền truy cập vào các biến trong phạm vi từ vựng bên ngoài (bao quanh) của nó, ngay cả sau khi hàm bên ngoài đã trả về. Điều này có nghĩa là hàm bên trong 'ghi nhớ' môi trường nơi nó được tạo ra.",
                    "codeExample": `function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Bên ngoài:', outerVariable);
    console.log('Bên trong:', innerVariable);
  }
}

const newFunction = outerFunction('bên ngoài');
newFunction('bên trong');
// Kết quả: Bên ngoài: bên ngoài
// Kết quả: Bên trong: bên trong`
                },
                {
                    "heading": "Phạm vi từ vựng",
                    "content": "Phạm vi từ vựng có nghĩa là phạm vi được xác định bởi nơi các hàm được khai báo trong code, không phải nơi chúng được gọi. Đây là nền tảng của closures.",
                    "codeExample": `const globalVar = 'toàn cục';

function outer() {
  const outerVar = 'bên ngoài';
  
  function inner() {
    const innerVar = 'bên trong';
    console.log(globalVar, outerVar, innerVar);
  }
  
  inner();
}

outer(); // 'toàn cục bên ngoài bên trong'`
                },
                {
                    "heading": "Trường hợp sử dụng thực tế",
                    "content": "Closures được sử dụng rộng rãi trong JavaScript để bảo mật dữ liệu, tạo hàm factory và triển khai mẫu module. Chúng cũng là nền tảng của callbacks và xử lý sự kiện.",
                    "codeExample": `function createCounter() {
  let count = 0; // Biến private
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2`
                }
            ],
            "conclusion": "Closures là một khái niệm cơ bản cho phép các mẫu lập trình mạnh mẽ trong JavaScript. Bằng cách hiểu cách closures hoạt động với phạm vi từ vựng, bạn có thể viết code dễ bảo trì và hiệu quả hơn."
        }
    },
    {
        "slug": "async-await-vs-promises",
        "title": "Async/Await vs Promises: Khi nào nên sử dụng cái nào",
        "description": "Hướng dẫn toàn diện so sánh async/await và promises, với các ví dụ thực tế và phương pháp hay nhất để xử lý các thao tác bất đồng bộ.",
        "date": "Tháng 2, 2024",
        topics: ["Async", "Promises", "ES6+"],
        "content": {
            "introduction": "Lập trình bất đồng bộ rất quan trọng trong JavaScript, và cả Promises lẫn async/await đều là những công cụ mạnh mẽ để xử lý các thao tác bất đồng bộ. Hãy cùng khám phá khi nào nên sử dụng mỗi phương pháp.",
            "sections": [
                {
                    "heading": "Hiểu về Promises",
                    "content": "Promises đại diện cho việc hoàn thành hoặc thất bại cuối cùng của một thao tác bất đồng bộ. Chúng cung cấp một giải pháp thay thế sạch hơn cho callback hell với các phương thức .then() và .catch().",
                    "codeExample": `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Lỗi:', error));`
                },
                {
                    "heading": "Cú pháp Async/Await",
                    "content": "Async/await là cú pháp được xây dựng trên nền tảng Promises, giúp code bất đồng bộ trông và hoạt động giống như code đồng bộ hơn. Nó cải thiện khả năng đọc code và xử lý lỗi.",
                    "codeExample": `async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Lỗi:', error);
  }
}

fetchData();`
                },
                {
                    "heading": "Khi nào nên sử dụng mỗi phương pháp",
                    "content": "Sử dụng async/await cho các thao tác tuần tự và khả năng đọc code tốt hơn. Sử dụng Promise.all() cho các thao tác song song. Kết hợp cả hai phương pháp dựa trên nhu cầu cụ thể của bạn.",
                    "codeExample": `// Thực thi song song với Promise.all
async function fetchMultipleData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch('/api/users').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comments').then(r => r.json())
    ]);
    
    return { users, posts, comments };
  } catch (error) {
    console.error('Lỗi:', error);
  }
}`
                }
            ],
            "conclusion": "Cả Promises và async/await đều có vị trí của chúng trong JavaScript hiện đại. Hiểu khi nào nên sử dụng mỗi phương pháp sẽ giúp bạn viết code bất đồng bộ sạch hơn và dễ bảo trì hơn."
        }
    },
    {
        "slug": "javascript-event-loop-explained",
        "title": "Giải thích Event Loop trong JavaScript",
        "description": "Giải thích trực quan về cách hoạt động của event loop, bao gồm call stack, callback queue và microtasks với các ví dụ thực tế.",
        "date": "Tháng 1, 2024",
        topics: ["Event Loop", "Async", "Performance"],
        "content": {
            "introduction": "Event loop là bí mật đằng sau hành vi bất đồng bộ của JavaScript. Hiểu cách nó hoạt động là rất quan trọng để viết code hiệu quả và gỡ lỗi các vấn đề về hiệu suất.",
            "sections": [
                {
                    "heading": "Call Stack",
                    "content": "Call stack là một cấu trúc dữ liệu LIFO (Last In, First Out) theo dõi việc thực thi hàm. Khi một hàm được gọi, nó được thêm vào stack; khi nó trả về, nó được xóa khỏi stack.",
                    "codeExample": `function first() {
  console.log('Đầu tiên');
  second();
  console.log('Đầu tiên một lần nữa');
}

function second() {
  console.log('Thứ hai');
}

first();
// Kết quả: Đầu tiên, Thứ hai, Đầu tiên một lần nữa`
                },
                {
                    "heading": "Callback Queue và Event Loop",
                    "content": "Khi các thao tác bất đồng bộ hoàn thành, callback của chúng được đặt vào callback queue. Event loop liên tục kiểm tra xem call stack có trống không và di chuyển callback từ queue sang stack.",
                    "codeExample": `console.log('Bắt đầu');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('Kết thúc');

// Kết quả: Bắt đầu, Kết thúc, Timeout
// Ngay cả với độ trễ 0ms, setTimeout vẫn là bất đồng bộ`
                },
                {
                    "heading": "Microtasks vs Macrotasks",
                    "content": "Microtasks (Promises, queueMicrotask) có độ ưu tiên cao hơn macrotasks (setTimeout, setInterval). Tất cả microtasks được thực thi trước macrotask tiếp theo.",
                    "codeExample": `console.log('Bắt đầu script');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(() => console.log('Promise 1'))
  .then(() => console.log('Promise 2'));

console.log('Kết thúc script');

// Kết quả: Bắt đầu script, Kết thúc script, Promise 1, Promise 2, setTimeout`
                }
            ],
            "conclusion": "Event loop là thứ làm cho I/O không chặn của JavaScript trở nên khả thi. Bằng cách hiểu call stack, callback queue và microtask queue, bạn có thể viết code bất đồng bộ dễ dự đoán hơn."
        }
    },
    {
        "slug": "mastering-array-methods",
        "title": "Thành thạo các phương thức Mảng trong JavaScript",
        "description": "Hướng dẫn đầy đủ về map, filter, reduce và các phương thức mảng khác với mẹo tối ưu hiệu suất và các trường hợp sử dụng phổ biến trong phát triển hiện đại.",
        "date": "Tháng 12, 2023",
        topics: ["Arrays", "Functional Programming", "ES6+"],
        "content": {
            "introduction": "Các phương thức mảng trong JavaScript là công cụ thiết yếu cho lập trình hàm. Chúng cho phép bạn biến đổi, lọc và tổng hợp dữ liệu một cách rõ ràng và khai báo.",
            "sections": [
                {
                    "heading": "Map: Biến đổi từng phần tử",
                    "content": "Phương thức map() tạo một mảng mới bằng cách áp dụng một hàm cho mỗi phần tử. Nó hoàn hảo để biến đổi dữ liệu mà không thay đổi mảng gốc.",
                    "codeExample": `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 }
];
const names = users.map(user => user.name);
console.log(names); // ['John', 'Jane']`
                },
                {
                    "heading": "Filter: Lọc các phần tử cụ thể",
                    "content": "Phương thức filter() tạo một mảng mới với các phần tử vượt qua một bài kiểm tra. Nó lý tưởng để chọn các tập hợp con dữ liệu dựa trên điều kiện.",
                    "codeExample": `const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

const users = [
  { name: 'John', age: 25, active: true },
  { name: 'Jane', age: 30, active: false },
  { name: 'Bob', age: 35, active: true }
];
const activeUsers = users.filter(user => user.active);`
                },
                {
                    "heading": "Reduce: Tổng hợp dữ liệu",
                    "content": "Phương thức reduce() thực thi một hàm reducer trên mỗi phần tử, tạo ra một giá trị đầu ra duy nhất. Nó mạnh mẽ để tổng hợp dữ liệu, đếm, nhóm và nhiều hơn nữa.",
                    "codeExample": `const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

const items = [
  { name: 'Apple', price: 1.5 },
  { name: 'Banana', price: 0.8 },
  { name: 'Orange', price: 1.2 }
];
const total = items.reduce((sum, item) => sum + item.price, 0);
console.log(total); // 3.5`
                }
            ],
            "conclusion": "Thành thạo các phương thức mảng như map, filter và reduce sẽ làm cho code của bạn dễ đọc và dễ bảo trì hơn. Những kỹ thuật lập trình hàm này là thiết yếu cho phát triển JavaScript hiện đại."
        }
    },
    {
        "slug": "javascript-design-patterns",
        "title": "Design Patterns trong JavaScript cho Code Sạch",
        "description": "Khám phá các design pattern thiết yếu như Module, Observer và Factory để viết code JavaScript dễ bảo trì và mở rộng.",
        "date": "Tháng 11, 2023",
        topics: ["Design Patterns", "Architecture", "Best Practices"],
        "content": {
            "introduction": "Design patterns là các giải pháp tái sử dụng cho các vấn đề lập trình phổ biến. Học các pattern này sẽ giúp bạn viết code dễ bảo trì, mở rộng và kiểm thử hơn.",
            "sections": [
                {
                    "heading": "Module Pattern",
                    "content": "Module pattern cung cấp tính đóng gói và riêng tư, cho phép bạn tạo các phương thức và biến công khai và riêng tư. Đây là một trong những pattern được sử dụng phổ biến nhất trong JavaScript.",
                    "codeExample": `const UserModule = (function() {
  // Biến và hàm riêng tư
  let users = [];
  
  function validateUser(user) {
    return user.name && user.email;
  }
  
  // API công khai
  return {
    addUser(user) {
      if (validateUser(user)) {
        users.push(user);
        return true;
      }
      return false;
    },
    getUsers() {
      return [...users]; // Trả về bản sao
    },
    getUserCount() {
      return users.length;
    }
  };
})();`
                },
                {
                    "heading": "Observer Pattern",
                    "content": "Observer pattern định nghĩa mối quan hệ một-nhiều giữa các đối tượng. Khi một đối tượng thay đổi trạng thái, tất cả các đối tượng phụ thuộc sẽ được thông báo tự động. Đây là nền tảng của lập trình hướng sự kiện.",
                    "codeExample": `class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }
}

const emitter = new EventEmitter();
emitter.on('userLogin', (user) => console.log(\`\${user} đã đăng nhập\`));
emitter.emit('userLogin', 'John'); // John đã đăng nhập`
                },
                {
                    "heading": "Factory Pattern",
                    "content": "Factory pattern cung cấp một interface để tạo đối tượng mà không cần chỉ định lớp cụ thể. Nó hữu ích khi bạn cần tạo các loại đối tượng khác nhau dựa trên các điều kiện nhất định.",
                    "codeExample": `class Car {
  constructor(options) {
    this.doors = options.doors || 4;
    this.color = options.color || 'white';
  }
}

class Truck {
  constructor(options) {
    this.doors = options.doors || 2;
    this.color = options.color || 'black';
    this.bedSize = options.bedSize || 'standard';
  }
}

class VehicleFactory {
  createVehicle(type, options) {
    switch(type) {
      case 'car':
        return new Car(options);
      case 'truck':
        return new Truck(options);
      default:
        throw new Error('Không biết loại phương tiện');
    }
  }
}

const factory = new VehicleFactory();
const myCar = factory.createVehicle('car', { color: 'red' });`
                }
            ],
            "conclusion": "Design patterns là các giải pháp đã được chứng minh có thể cải thiện đáng kể chất lượng code của bạn. Bằng cách hiểu và áp dụng các pattern này, bạn sẽ viết các ứng dụng JavaScript dễ bảo trì và mở rộng hơn."
        }
    },
    {
        "slug": "java-oop-fundamentals",
        "title": "Lập trình Hướng Đối tượng trong Java",
        "description": "Khám phá bốn trụ cột của OOP trong Java — đóng gói, kế thừa, đa hình và trừu tượng — và cách chúng biến Java thành ngôn ngữ mạnh mẽ, tái sử dụng và dễ bảo trì.",
        "date": "Tháng 2, 2024",
        topics: ["OOP", "Classes", "Inheritance", "Encapsulation"],
        "content": {
            "introduction": "Lập trình Hướng Đối tượng (OOP) là mô hình cốt lõi trong Java. Nó cho phép các nhà phát triển cấu trúc phần mềm thành các thành phần mô-đun, có thể tái sử dụng, phản ánh các thực thể trong thế giới thực.",
            "sections": [
                {
                    "heading": "Đóng gói",
                    "content": "Đóng gói là việc gói gọn dữ liệu (trường) và phương thức (hàm) hoạt động trên dữ liệu đó thành một đơn vị duy nhất — một lớp — trong khi hạn chế quyền truy cập trực tiếp vào một số thành phần.",
                    "codeExample": `public class Account {
  private double balance;

  public void deposit(double amount) {
    balance += amount;
  }

  public double getBalance() {
    return balance;
  }
}`
                },
                {
                    "heading": "Kế thừa",
                    "content": "Kế thừa cho phép một lớp kế thừa các trường và phương thức từ một lớp khác, cho phép tái sử dụng mã và tạo hệ thống phân cấp logic.",
                    "codeExample": `class Animal {
  void sound() {
    System.out.println("Động vật kêu");
  }
}

class Dog extends Animal {
  void sound() {
    System.out.println("Chó sủa");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal a = new Dog();
    a.sound(); // Chó sủa
  }
}`
                },
                {
                    "heading": "Đa hình và Trừu tượng",
                    "content": "Đa hình cho phép một giao diện được sử dụng cho các kiểu khác nhau (ví dụ: ghi đè phương thức), trong khi trừu tượng ẩn chi tiết triển khai khỏi người dùng.",
                    "codeExample": `abstract class Shape {
  abstract void draw();
}

class Circle extends Shape {
  void draw() {
    System.out.println("Vẽ hình tròn");
  }
}

public class Test {
  public static void main(String[] args) {
    Shape shape = new Circle();
    shape.draw(); // Vẽ hình tròn
  }
}`
                }
            ],
            "conclusion": "Hiểu về OOP là rất quan trọng để thành thạo Java. Nó thúc đẩy tính mô-đun, khả năng mở rộng và kiến trúc sạch sẽ trong các dự án."
        }
    },
    {
        "slug": "java-streams-api",
        "title": "Xử lý Dữ liệu Đơn giản hóa với Java Streams",
        "description": "Tìm hiểu cách Java Streams API biến việc xử lý dữ liệu thành một quy trình hàm và biểu cảm để có mã sạch hơn và nhanh hơn.",
        "date": "Tháng 3, 2024",
        topics: ["Streams", "Lambda", "Functional Programming"],
        "content": {
            "introduction": "Được giới thiệu trong Java 8, Streams API cho phép thực hiện các thao tác theo phong cách hàm trên các tập hợp, cho phép các nhà phát triển xử lý dữ liệu một cách khai báo.",
            "sections": [
                {
                    "heading": "Stream là gì?",
                    "content": "Một Stream đại diện cho một chuỗi các phần tử có thể được xử lý với các thao tác như filter, map và reduce — mà không làm thay đổi nguồn dữ liệu cơ bản.",
                    "codeExample": `import java.util.*;
import java.util.stream.*;

public class StreamExample {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
    numbers.stream()
           .filter(n -> n % 2 == 0)
           .map(n -> n * n)
           .forEach(System.out::println); // 4, 16
  }
}`
                },
                {
                    "heading": "Thao tác Trung gian và Kết thúc",
                    "content": "Các thao tác trung gian (như `filter`, `map`) trả về một stream mới, trong khi các thao tác kết thúc (như `collect`, `forEach`) tạo ra kết quả hoặc hiệu ứng phụ.",
                    "codeExample": `List<String> names = Arrays.asList("Anna", "Bob", "Charlie");

List<String> result = names.stream()
  .filter(name -> name.startsWith("C"))
  .map(String::toUpperCase)
  .collect(Collectors.toList());

System.out.println(result); // [CHARLIE]`
                }
            ],
            "conclusion": "Streams làm cho Java trở nên biểu cảm và hiệu quả hơn, thúc đẩy tính bất biến và xử lý song song trong xử lý dữ liệu."
        }
    },
    {
        "slug": "java-multithreading-basics",
        "title": "Bắt đầu với Lập trình Đa luồng trong Java",
        "description": "Hiểu cách luồng hoạt động trong Java và cách viết các chương trình đồng thời sử dụng Runnable, Thread và ExecutorService.",
        "date": "Tháng 4, 2024",
        topics: ["Multithreading", "Concurrency", "Synchronization"],
        "content": {
            "introduction": "Lập trình đa luồng cho phép các chương trình Java thực hiện nhiều tác vụ đồng thời, cải thiện hiệu suất và khả năng phản hồi.",
            "sections": [
                {
                    "heading": "Tạo Luồng",
                    "content": "Có hai cách chính để tạo luồng trong Java: mở rộng lớp Thread hoặc triển khai giao diện Runnable.",
                    "codeExample": `class MyThread extends Thread {
  public void run() {
    System.out.println("Luồng đang chạy: " + Thread.currentThread().getName());
  }
}

public class Main {
  public static void main(String[] args) {
    MyThread t1 = new MyThread();
    t1.start();
  }
}`
                },
                {
                    "heading": "Sử dụng Runnable và ExecutorService",
                    "content": "ExecutorService cung cấp API cấp cao để quản lý luồng hiệu quả, tránh việc tạo luồng thủ công.",
                    "codeExample": `import java.util.concurrent.*;

public class ExecutorExample {
  public static void main(String[] args) {
    ExecutorService executor = Executors.newFixedThreadPool(2);
    Runnable task = () -> System.out.println("Đang chạy tác vụ trong " + Thread.currentThread().getName());
    executor.submit(task);
    executor.shutdown();
  }
}`
                }
            ],
            "conclusion": "Thành thạo lập trình đa luồng là chìa khóa để xây dựng các ứng dụng Java có khả năng phản hồi và mở rộng, tận dụng lợi thế của các CPU hiện đại."
        }
    },
    {
        "slug": "java-generics-explained",
        "title": "Hiểu về Generics trong Java cho An toàn Kiểu dữ liệu",
        "description": "Tìm hiểu cách Generics trong Java mang lại sự an toàn kiểu dữ liệu và khả năng tái sử dụng cho mã của bạn thông qua các kiểu được tham số hóa.",
        "date": "Tháng 5, 2024",
        topics: ["Generics", "Type Safety", "Collections"],
        "content": {
            "introduction": "Generics cho phép các lớp, giao diện và phương thức hoạt động trên các kiểu được chỉ định dưới dạng tham số. Chúng giúp loại bỏ lỗi kiểu dữ liệu tại thời điểm chạy bằng cách đảm bảo kiểm tra kiểu tại thời điểm biên dịch.",
            "sections": [
                {
                    "heading": "Tại sao sử dụng Generics?",
                    "content": "Trước khi có Generics, các collection trong Java lưu trữ đối tượng dưới dạng kiểu `Object`, buộc các nhà phát triển phải ép kiểu thủ công — điều này có thể gây ra `ClassCastException`.",
                    "codeExample": `List list = new ArrayList();
list.add("Hello");
String s = (String) list.get(0); // Yêu cầu ép kiểu thủ công`
                },
                {
                    "heading": "Ví dụ về Generics",
                    "content": "Với Generics, bạn có thể định nghĩa một danh sách chỉ lưu trữ các kiểu cụ thể, làm cho mã an toàn hơn và sạch hơn.",
                    "codeExample": `List<String> names = new ArrayList<>();
names.add("Alice");
String name = names.get(0); // Không cần ép kiểu`
                },
                {
                    "heading": "Lớp Generic",
                    "content": "Bạn cũng có thể tạo các lớp generic của riêng mình với các tham số kiểu.",
                    "codeExample": `public class Box<T> {
  private T value;
  public void set(T value) { this.value = value; }
  public T get() { return value; }
}

Box<Integer> intBox = new Box<>();
intBox.set(42);
System.out.println(intBox.get());`
                }
            ],
            "conclusion": "Generics làm cho mã Java an toàn hơn, sạch hơn và có thể tái sử dụng bằng cách phát hiện các lỗi liên quan đến kiểu dữ liệu trong quá trình biên dịch."
        }
    },
    {
        "slug": "java-exception-handling",
        "title": "Thành thạo Xử lý Ngoại lệ trong Java",
        "description": "Tìm hiểu cách hệ thống xử lý ngoại lệ mạnh mẽ của Java giúp quản lý lỗi runtime một cách uyển chuyển và duy trì luồng chương trình sạch sẽ.",
        "date": "Tháng 6, 2024",
        topics: ["Exceptions", "Error Handling", "Try-Catch"],
        "content": {
            "introduction": "Xử lý ngoại lệ trong Java là một cơ chế cho phép các nhà phát triển quản lý lỗi và các điều kiện bất thường một cách có hệ thống, ngăn chặn sự cố ứng dụng.",
            "sections": [
                {
                    "heading": "Các loại Ngoại lệ",
                    "content": "Java chia ngoại lệ thành Checked, Unchecked và Errors. Các ngoại lệ Checked phải được xử lý rõ ràng, trong khi các ngoại lệ Unchecked xảy ra do lỗi logic lập trình.",
                    "codeExample": `try {
  FileReader reader = new FileReader("file.txt");
} catch (FileNotFoundException e) {
  System.out.println("Không tìm thấy file: " + e.getMessage());
}`
                },
                {
                    "heading": "Ném Ngoại lệ",
                    "content": "Bạn có thể tạo và ném các ngoại lệ của riêng mình để báo hiệu các điều kiện lỗi trong logic tùy chỉnh.",
                    "codeExample": `public class InvalidAgeException extends Exception {
  public InvalidAgeException(String msg) {
    super(msg);
  }
}

public void validateAge(int age) throws InvalidAgeException {
  if (age < 18) throw new InvalidAgeException("Tuổi phải từ 18 trở lên");
}`
                },
                {
                    "heading": "Try-with-Resources",
                    "content": "Được giới thiệu trong Java 7, try-with-resources tự động đóng các tài nguyên như stream hoặc file sau khi sử dụng.",
                    "codeExample": `try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
  System.out.println(br.readLine());
} catch (IOException e) {
  e.printStackTrace();
}`
                }
            ],
            "conclusion": "Bằng cách thành thạo xử lý ngoại lệ, các nhà phát triển có thể làm cho ứng dụng Java của họ đáng tin cậy hơn, dễ bảo trì hơn và thân thiện với người dùng hơn."
        }
    },
]

export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find((article) => article.slug === slug)
}

export function getAllArticles(): Article[] {
    return articles
}
