from django.contrib import admin
from django.contrib.admin import ModelAdmin

from store.models import Book, UserBookRelation


class BookAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price')
    list_filter = ('name', 'price')


admin.site.register(Book, BookAdmin)


@admin.register(UserBookRelation)
class UserBookRelation(ModelAdmin):
    pass





