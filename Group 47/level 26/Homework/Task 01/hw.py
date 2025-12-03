# 1) სამკუთხდები დამიხაზეთ 120 ცალი ოღონდ მხოლოდ კენტი <3 რიცხვებით ფუქნციების გამოყევებეა არ დაგვავიწყდეს
# თუ ჩვენი სამკუთხედი დამეთხვევა კენტ index მაში ნ სამკუთხედი იყოს მწვანე თუ არა და იყოსლურჯი

import turtle

def draw_triangle(x, y, color):
    turtle.penup()  
    turtle.goto(x, y)  
    turtle.pendown()  
    turtle.begin_fill()  
    turtle.fillcolor(color)  

    
    for i in range(3):
        turtle.forward(50)  
        turtle.left(120)  

    turtle.end_fill()  

def draw_triangles():
    turtle.speed(0)  
    turtle.bgcolor("white")  

    
    for i in range(120):
        color = 'green' if i % 2 != 0 else 'blue'  
        x = (i % 12) * 60 - 360   
        y = (i // 12) * 60 - 180  
        draw_triangle(x, y, color)

    turtle.hideturtle()  
    turtle.done()  

draw_triangles()