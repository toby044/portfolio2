---
tags: []
title: "Demystifying the Bates Shuffle: True Randomness"
date: 2025-07-22T00:00:00.000Z
---

When developers hear "shuffle", we usually think of the Fisher-Yates algorithm — and rightly so. It’s efficient, unbiased, and has been the gold standard for decades. But what if we need randomness that feels more *natural*?

Enter the **Bates Shuffle**.

## What Is the Bates Shuffle?

The Bates Shuffle is derived from statistical methods, specifically from the **Bates distribution**, which is formed by averaging `n` uniform random variables. Instead of a flat random distribution like Fisher-Yates, this shuffle produces a smoother, bell-shaped randomness — similar to a Gaussian curve.

In web development, this can be useful in cases where **uniform randomness looks "too random"** and jarring, especially in animations, transitions, or procedural content.

## Implementation

```js [bates-shuffle.js]

function batesShuffle(n, samples = 3) {
    return Array.from({ length: n }, (_, i) => ({
        index: i,
        value: Array.from({ length: samples }, Math.random)
        .reduce((a, b) => a + b) / samples,
  }))
    .sort((a, b) => a.value - b.value)
    .map(item => item.index);
}
```

Here, each index is given an averaged “random value” that dictates its position. More samples = smoother randomness.

## When should you use it?

- UI Animations: Staggering animations based on weighted randomness can appear more organic.
- Music/Media Shuffling: Avoiding "bad luck" when clicking the shuffle button.
- Procedural Generation: Games or simulations where uniform randomness looks artificial.

## Downsides

- Performance: Slower than fisher-yates
- Bias: Favors the center of the range

## Summary

While not a replacement for fisher-yates in most cases, the bates shuffle is a hidden gem for frontend devs aiming for natural-feeling randomness. Sometimes, math that looks less random ends up feeling more real.
