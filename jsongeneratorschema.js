{
  countries: [
    '{{repeat(5)}}',
    {
      country: '{{country()}}',
      states: [
        '{{repeat(1, 10)}}',
        {
          state: '{{state()}}',
          cities: [
            '{{repeat(1, 5)}}',
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
  ]
}