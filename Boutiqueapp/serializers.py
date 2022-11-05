from dataclasses import fields
from Boutiqueapp.models import Cart,ShopKeeper, Notification, Customer, Payment,Product
from rest_framework import serializers

class ShopKeeperSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopKeeper
        fields = ("first_name", "last_name", "phone_number","email","password")

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ("first_name", "last_name", "phone_number","email","password")

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ("message", "tittle","date_of_notification")


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("product_name", "product_size","product_quantity","product_price")

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ("products_name", "products_size","products_quantity","products_price")



class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ("message", "title","date_of_notification","payment_type","customer_id","total_payment")



