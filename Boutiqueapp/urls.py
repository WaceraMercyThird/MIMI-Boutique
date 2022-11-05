from django.urls import path, include
from Boutiqueapp.views import ShopKeeperViewSet
from rest_framework import routers
from .views import CartViewSet, NotificationViewSet,PaymentViewSet, ProductViewSet, CustomerViewSet,ShopKeeperViewSet

router = routers.DefaultRouter()
router.register(r"ShopKeeper",ShopKeeperViewSet)
router.register(r"Customer",CustomerViewSet)
router.register(r"Notification",NotificationViewSet)
router.register(r"Product",ProductViewSet)
router.register(r"Cart",CartViewSet)
router.register(r"Payment",PaymentViewSet)

urlpatterns=[
    path("",include(router.urls)),
]