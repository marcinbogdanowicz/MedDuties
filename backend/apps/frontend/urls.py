from apps.frontend import views
from django.urls import path, re_path

urlpatterns = [
    path('', views.index, name='index'),
    re_path(r'^.*/$', views.index, name='index'),
]
