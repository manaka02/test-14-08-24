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
    public function getUsers(int $page = 1): array
    {
        $params = [
            "_per_page" => 10,
            "_sort" => 'id',
            "_order" => 'desc',
            "_page" => $page,
        ];
        $response = $this->client->request('GET', $this->urlSource . '/users', [
            'query' => $params
        ]);


        return [
            "total" => count($response->toArray()),
            "data" => $response->toArray()
        ];
    }

    // getTodos
    public function getTodos(int $page = 1): array
    {
        $params = [
            "_limit" => 5,
            "_sort" => 'id',
            "_order" => 'desc',
        ];
        $response = $this->client->request('GET', $this->urlSource . '/todos',[
            'query' => $params
        ]);
        return [
            "total" => count($response->toArray()),
            "data" => $response->toArray()
        ];

    }

    // getComments
    public function getComments(): array
    {
        $params = [
            "_limit" => 5,
            "_sort" => 'id',
            "_order" => 'desc',
        ];
        $response = $this->client->request('GET', $this->urlSource . '/comments',[
            'query' => $params
        ]);

        return [
            "total" => count($response->toArray()),
            "data" => $response->toArray()
        ];
    }
}