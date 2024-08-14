<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class ApiServices
{
    private string $urlSource  = 'https://jsonplaceholder.typicode.com';

    public function __construct(
        private readonly HttpClientInterface $client
    )
    {}

    // getUsers
    public function getUsers(): array
    {
        $response = $this->client->request('GET', $this->urlSource . '/users');
        return $response->toArray();
    }

    // getTodos
    public function getTodos(): array
    {
        $response = $this->client->request('GET', $this->urlSource . '/todos');
        return $response->toArray();
    }

    // getComments
    public function getComments(): array
    {
        $response = $this->client->request('GET', $this->urlSource . '/comments');
        return $response->toArray();
    }
}