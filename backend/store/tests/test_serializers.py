from store.serializers import BooksSerializer
from django.test import TestCase
from store.models import Book


class BookSerializerTestCase(TestCase):

    def setUp(self):
        self.book_1 = Book.objects.create(name='Test book 1', price=25,
                                          author_name='Author_1')
        self.book_2 = Book.objects.create(name='Test book 2', price=45,
                                          author_name='Author_2')

    def test_ok(self):
        data = BooksSerializer([self.book_1, self.book_2], many=True).data
        expected_data = [
            {
                'id': self.book_1.id,
                'name': 'Test book 1',
                'price': '25.00',
                'author_name': 'Author_1',
            },
            {
                'id': self.book_2.id,
                'name': 'Test book 2',
                'price': '45.00',
                'author_name': 'Author_2',
            }
        ]
        self.assertEqual(expected_data, data)
