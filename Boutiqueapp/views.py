from django.shortcuts import render

from Boutiqueapp.models import Cart, Notification, Payment, Product, Customer, ShopKeeper
from Boutiqueapp.serializers import CartSerializer, NotificationSerializer,PaymentSerializer, ProductSerializer, CustomerSerializer, ShopKeeperSerializer
from rest_framework import viewsets

# Create your views here.
class ShopKeeperViewSet(viewsets.ModelViewSet):
    queryset = ShopKeeper.objects.all()
    serializer_class = ShopKeeperSerializer

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer


