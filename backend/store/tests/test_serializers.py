from store.serializers import BooksSerializer
from django.test import TestCase
from store.models import Book, UserBookRelation
from django.contrib.auth.models import User
from collections import OrderedDict


class BookSerializerTestCase(TestCase):

    def setUp(self):
        self.user1 = User.objects.create(username='test_username1')
        self.user2 = User.objects.create(username='test_username2')
        self.user3 = User.objects.create(username='test_username3')
        self.book_1 = Book.objects.create(name='Test book 1', price=25,
                                          author_name='Author_1',
                                          owner=self.user1)
        self.book_2 = Book.objects.create(name='Test book 2', price=45,
                                          author_name='Author_2',
                                          owner=self.user1)

    def test_ok(self):
        UserBookRelation.objects.create(user=self.user1, book=self.book_1,
                                        like=True)
        UserBookRelation.objects.create(user=self.user2, book=self.book_1,
                                        like=True)
        UserBookRelation.objects.create(user=self.user3, book=self.book_1,
                                        like=True)
        UserBookRelation.objects.create(user=self.user1, book=self.book_2,
                                        like=True)
        UserBookRelation.objects.create(user=self.user2, book=self.book_2,
                                        like=True)
        UserBookRelation.objects.create(user=self.user3, book=self.book_2,
                                        like=False)
        data = BooksSerializer([self.book_1, self.book_2], many=True).data
        expected_data = [
            OrderedDict([
                ('id', self.book_1.id),
                ('name', 'Test book 1'),
                ('price', '25.00'),
                ('author_name', 'Author_1'),
                ('owner', self.user1.id),
                ('likes_count', 3),
            ]),
            OrderedDict([
                ('id', self.book_2.id),
                ('name', 'Test book 2'),
                ('price', '45.00'),
                ('author_name', 'Author_2'),
                ('owner', self.user1.id),
                ('likes_count', 2),
            ])
        ]
        self.assertEqual(expected_data, data)

