// 7)ცვლადი role:
// შეამოწმე თუ ცვლადში ინახება შემდეგი მნშვნელობები გამოიტანე შესაბამისი ტექსტი

// "admin"

// "user"

// "guest"

// switch–case-ით განსაზღვრე წვდომა.
// თუ სხვა მნიშვნელობაა -> default ->
// "როლი არ არის განსაზღვრული"

const role = prompt("Enter role (admin, user, guest):");

switch (role) {
    case "admin":
        console.log("admin — full access");
        break;
    case "user":
        console.log("user — standard access");
        break;
    case "guest":
        console.log("guest — read-only access");
        break;
    default:
        console.log("role is not defined");
}