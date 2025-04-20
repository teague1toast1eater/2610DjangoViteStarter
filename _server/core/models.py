from django.db import models

# User model
class User(models.Model):
    id = models.BigAutoField(primary_key=True)
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)

# Quiz model
class Quiz(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=255)
    description = models.TextField()
    score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    # Add any additional fields as needed

# QuizQuestion model
class QuizQuestion(models.Model):
    id = models.BigAutoField(primary_key=True)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    question_text = models.TextField()
    # Add any additional fields as needed

# QuizAnswer model
# do i need to have this? the answers are all going to be 1 - 10

# QuizResult model
class QuizResult(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    score = models.IntegerField()
    date_taken = models.DateTimeField(auto_now_add=True)
    # Add any additional fields as needed

# FlashQuiz model

# FlashQuizQuestion model

# FlashQuizAnswer model

# FlashQuizResult model

# FirstAid model

# Resources model
class Resource(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=255)
    description = models.TextField()
    url = models.URLField()
    more_info = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    # Add any additional fields as needed

# SelfCare model

# PersonalGoal model
class PersonalGoal(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    goal = models.TextField()
    is_completed = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True)
    # Add any additional fields as needed

# 