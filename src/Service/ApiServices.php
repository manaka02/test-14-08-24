<?php

namespace App\Service;

use App\Entity\Comment;
use App\Entity\Post;
use App\Entity\Todo;
use App\Entity\Utilisateur;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ApiServices
{
    private string $urlSource  = 'https://jsonplaceholder.typicode.com';

    public function __construct(
        private readonly HttpClientInterface $client,
        private readonly ManagerRegistry $managerRegistry
    )
    {}

    public function beginExtraction()
    {
        $this->extractUsers();
        $this->extractTodos();
        $this->extractComments();
        $this->extractPosts();

        $this->managerRegistry->getManager()->flush();
    }

    // getUsers
    public function extractUsers()
    {
        $response = $this->client->request('GET', $this->urlSource . '/users');

        foreach ($response->toArray() as $item) {
            $user = new Utilisateur();

            $user->setName($item['name'])
                ->setEmail($item['email']);

            $this->managerRegistry->getManager()->persist($user);
        }
    }

    // getTodos
    public function extractTodos()
    {
        $response = $this->client->request('GET', $this->urlSource . '/todos');

        foreach ($response->toArray() as $item) {
            $todo = new Todo();
            $todo->setContent($item['title']);
            $this->managerRegistry->getManager()->persist($todo);
        }

    }

    // getComments
    public function extractComments()
    {
        $response = $this->client->request('GET', $this->urlSource . '/comments');

        foreach ($response->toArray() as $item) {
            $comment = new Comment();
            $comment->setContent($item['body']);
            $this->managerRegistry->getManager()->persist($comment);
        }
    }

    private function extractPosts()
    {
        $response = $this->client->request('GET', $this->urlSource . '/posts');

        foreach ($response->toArray() as $item) {
            $post = new Post();
            $post->setTitle($item['title']);
            $this->managerRegistry->getManager()->persist($post);
        }
    }

    public function addUser(?array $data)
    {
        if (!isset($data['name']) || !isset($data['email'])) {
            throw new \Exception("name and email are required");
        }

        $data = [
            'name' => $data['name'],
            'email' => $data['email'],
        ];

        $headers = [
            'Content-Type' => 'application/json',
            'charset' => 'utf-8',
        ];

        try {
            $response = $this->client->request('POST', $this->urlSource . '/users', [
                'headers' => $headers,
                'json' => $data
            ]);

            return $response->toArray();
        }catch (\Throwable $e){
            throw new \Exception( "Une erreur est survenue lors de l'ajout de l'utilisateur");
        }

    }

    public function updateUser(?array $data)
    {
    }

    public function deleteUser(int $id)
    {
    }




}