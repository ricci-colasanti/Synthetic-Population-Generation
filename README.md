
# Synthetic Population Generation

This guide presents four robust methods for creating synthetic populations that match known marginal distributions while preserving realistic relationships between variables.

Click on each header to view a detailed description on a new page.

---

## 1. [Deterministic Re-weighting](DeterministicRe-weighting.html)
### Simple and Efficient

Adjusts sample weights directly to match target marginals through multiplicative factors.

When to Use:

    Quick prototyping

    When only need to match one or two dimensions

    Computationally constrained environments

## 2. Iterative Proportional Fitting (IPF)
Gold Standard for Multi-Dimensional Matching

Iteratively adjusts weights to simultaneously match all specified marginals.

When to Use:

    Need to match 3+ dimensions simultaneously

    Require statistically rigorous results

    Working with large sample sizes

### 3. Simulated Annealing
Flexible Optimization Approach

Uses probabilistic search to find optimal population configuration.

When to Use:

    Complex, non-linear constraints

    When IPF struggles to converge

    Need to incorporate custom constraints

4. Conditional Probabilities
Relationship-Preserving Generation

Creates synthetic individuals by sampling from learned conditional distributions, preserving variable dependencies.
Implementation Highlights:
python
Copy

## 4 Conditional probability core


When to Use:

    Need to preserve natural variable dependencies from real data

    Creating entirely new individuals (not reweighting existing)

    When joint distributions matter more than exact marginal matching

    Building Bayesian network-style synthetic data

Method Comparison
Criteria	Deterministic	IPF	Annealing	Conditional
Implementation	Simple	Medium	Complex	Medium
Speed	Fastest	Fast	Slow	Medium
Marginal Accuracy	High (1D)	High	Variable	Approximate
Joint Distribution	Poor	Good	Custom	Best
Best For	Quick checks	Standard use	Custom constraints	Realistic relationships
