
# Synthetic Population Generation

This guide presents four robust methods for creating synthetic populations that match known marginal distributions while preserving realistic relationships between variables.

Click on each header to view a detailed description on a new page.

---

## 1. [Deterministic Re-weighting](DeterministicRe-weighting.html)
### Simple and Efficient

Adjusts sample weights directly to match target marginals through multiplicative factors.

#### Implementation Highlights:
```python
# Core adjustment logic
for record in sample_data:
    for dimension in ['age', 'gender', 'education']:
        adjustment = target_margins[dimension][record[dimension]] / current_margins[dimension][record[dimension]]
        record['weight'] *= adjustment

Sample Output:
Copy

ID  Age    Gender  Education     Weight
1   18-25  Male    School    1.34
2   26-35  Female  Degree      0.92
3   18-25  Female  Degree      1.41

When to Use:

    Quick prototyping

    When only need to match one or two dimensions

    Computationally constrained environments

2. Iterative Proportional Fitting (IPF)
Gold Standard for Multi-Dimensional Matching

Iteratively adjusts weights to simultaneously match all specified marginals.
Implementation Highlights:
python
Copy

## IPF core algorithm
while not converged:
    for dimension in dimensions:
        current_margins = calculate_marginals(population, dimension)
        adjustments = {cat: target[cat]/current[cat] for cat in target}
        apply_adjustments(population, dimension, adjustments)
        check_convergence()

Sample Output:
Copy

Converged after 8 iterations
Age marginals matched with RMSE: 0.02
Gender marginals matched with RMSE: 0.01

When to Use:

    Need to match 3+ dimensions simultaneously

    Require statistically rigorous results

    Working with large sample sizes

3. Simulated Annealing
Flexible Optimization Approach

Uses probabilistic search to find optimal population configuration.
Implementation Highlights:
python
Copy

# Annealing core
while temperature > min_temp:
    new_pop = mutate(current_pop)
    ΔE = energy(new_pop) - energy(current_pop)
    if ΔE < 0 or random() < exp(-ΔE/temp):
        current_pop = new_pop
    temperature *= cooling_rate

Sample Output:
Copy

Temperature: 10.0  Energy: 42.3
Temperature: 9.5   Energy: 38.1
...
Final energy: 2.1 (optimal reached)

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

# Conditional probability core
def generate_population(reference_data, size):
    # Learn P(age), P(gender|age), P(education|age,gender)
    age_probs = reference_data['age'].value_counts(normalize=True)
    gender_probs = reference_data.groupby('age')['gender'].value_counts(normalize=True)
    edu_probs = reference_data.groupby(['age','gender'])['education'].value_counts(normalize=True)
    
    synthetic = []
    for _ in range(size):
        # Sample hierarchically
        age = sample(age_probs)
        gender = sample(gender_probs[age])
        education = sample(edu_probs[(age,gender)])
        synthetic.append({'age':age, 'gender':gender, 'education':education})
    
    return pd.DataFrame(synthetic)

Sample Output:
Copy

Generated 1500 individuals with preserved relationships:
Age 18-25: 32% (target: 33%)  
P(Female|18-25): 61% (ref: 60%)  
P(Degree|Male,26-35): 42% (ref: 40%)

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
