import test from 'ava'
import kdj from '../src'

;[
  [
    'normal',
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      [1, 1, 2, 3, 2, 4, 4, 6, 8, 9, 10, 10],
      [2, 2, 3, 4, 6, 8, 7, 9, 11, 11, 12, 14]
    ],

    {
      K: [
        ,,,,,,,,0,
        83.33333333333334,
        85.55555555555557,
        84.81481481481482
      ],
      D: [
        ,,,,,,,,0,
        27.77777777777778,
        47.037037037037045,
        59.62962962962964
      ],
      J: [,,,,,,,,0,100,100,100]
    }
  ]
]
.forEach(([d, args, expected]) => {
  test(d, async t => {
    const result = kdj(...args)
    t.deepEqual(result, expected)
  })
})
