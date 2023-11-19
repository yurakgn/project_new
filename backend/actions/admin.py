from django.contrib import admin
from actions.models import Action


@admin.register(Action)
class ActionAdmin(admin.ModelAdmin):
    model = Action
    list_display = ['user', 'verb', 'target', 'created']
    list_filter = ['created']
    search_fields = ['verb']
