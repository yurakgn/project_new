from django.contrib import admin
from .models import Book


class BookAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price')
    list_filter = ('name', 'price')


admin.site.register(Book, BookAdmin)
