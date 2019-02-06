{
  countries: [
    '{{repeat(5)}}',
    {
      name: '{{country()}}',
      cities: [
        '{{repeat(10, 20)}}',
        {
          city: '{{city()}}',
          streets: [
            '{{repeat(1, 5)}}',
            {
              street: '{{street()}}',
              numbers: [
                '{{repeat(1, 5)}}',
                '{{integer(100, 999)}}'
              ]
            }
          ]
        }
      ]
    }
  ]
}