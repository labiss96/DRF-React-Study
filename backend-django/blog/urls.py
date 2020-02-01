from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('post', views.PostView, 'post')

urlpatterns = [
    # path('main/', views.PostView.as_view()),
    path('api/', include(router.urls)),
]