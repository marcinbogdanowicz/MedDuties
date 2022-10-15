from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import (ObtainTokenPairView, CreateUserView, 
LogoutAndBlacklistRefreshTokenForUserView, UserDetailView)

urlpatterns = [
    path('user/create/', 
        CreateUserView.as_view(), name='create_user'),
    path('user/<int:pk>/',
        UserDetailView.as_view(), name='user-detail'),
    path('token/obtain/', 
        ObtainTokenPairView.as_view(), name='token_create'),
    path('token/refresh/', 
        jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', 
        LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist'),

    
]


"""
Sending token to see the view:
curl --header "Content-Type: application/json" \
--header "Authorization: JWT \
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXN
zIiwiZXhwIjoxNjY1MjYwNjM1LCJpYXQiOjE2NjUyNjAzMzUsImp0aSI6IjAzYTB
hMjk4MDk5YTQ2YjU5NjRiOGQ0ZDFiNDNjMjE3IiwidXNlcl9pZCI6MiwiZmF2X2N
vbG9yIjoiIn0.n3zHmoGE34MnHzIJGENk9yeyY0siOfmekAIGwB7f52w" 
-X GET http://127.0.0.1:8000/api/hello/
"""
