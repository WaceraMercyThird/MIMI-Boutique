from django.contrib import admin
from .models import Cart,Payment, Product, ShopKeeper
from .models import Customer
from .models import Notification

# Register your models here.

class ShopKeeperAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "phone_number","email","password")
    search_fields =("first_name", "last_name", "phone_number","email","password")
admin.site.register(ShopKeeper,ShopKeeperAdmin)

class CustomerAdmin(admin.ModelAdmin):
    list_dispaly = ("first_name", "last_name", "phone_number","email","password",)
    search_fields = ("first_name", "last_name", "phone_number","email","password",)
admin.site.register(Customer,CustomerAdmin)
                                                                                                            
class NotificationAdmin(admin.ModelAdmin):
    list_display =('tittle','date_of_notification','message',)
    search_fields= ('tittle','date_of_notification','message',)
admin.site.register(Notification,NotificationAdmin)


class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name','product_size')
    search_fields = ('product_name','product_size')
admin.site.register(Product,ProductAdmin)


class CartAdmin(admin.ModelAdmin):
    list_display = ('products_name','products_size','products_quantity','products_price')
    search_fields = ('products_name','products_size','products_quantity','products_price')
admin.site.register(Cart,CartAdmin)


class PaymentAdmin(admin.ModelAdmin):
    list_display = ('message','title','date_of_notification','payment_type')
    search_fields = ('message','title','date_of_notification','payment_type')
admin.site.register(Payment,PaymentAdmin)


