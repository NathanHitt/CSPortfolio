---
title: 'Introduction to Quantum Computing'
author: 'Nathan Hittesdorf'
    
---


*NOTE: This article requires basic familiarity with python, quantum mechanics, linear algebra, and bra-ket/Dirac notation to fully understand. You can of course follow along without it, but you may have to do extra research to understand the math and the notation. I will provide some useful links to understand these concepts below.


Basic Dirac Notation for Intellectuals
https://www.youtube.com/watch?v=z8c4WIjcCRM&ab_channel=AndrewDotson

Linear Algebra Course:
https://www.khanacademy.org/math/linear-algebra



Quantum computing provides a distinct advantage over classical computing because of the dimensions in which information can be stored and manipulated. In classical computing the fundamental building blocks of information, the bit, are binary. Either 1 or 0. In quantum computing, this information model is expanded exponentially as we instead represent each bit (known as a qubit) as a vector in the two-dimensional complex plane. The vector can stretch in any direction between a maximum value of 0 on one axis, and a maximum value of 1 on the other axis. The complex plane then functions as a rotational medium through which the vector can be transposed for more computationally efficient operations. This is represented visually as the Bloch sphere:

![image](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bloch_sphere.svg/220px-Bloch_sphere.svg.png)


All states are representable by the equation: |q> = cos(θ/2)|0> + e^(iϕ)sin(θ/2)1>
where θ and ϕ are real numbers. 

** Note: all states can be represented as a[1, 0] + b[0, 1] where a and be are any real number since the 0 and 1 vector form an orthonormal basis. Quantum states can be expressed in this form with any pair of orthonormal vectors, but we will stick to the 0 and 1 vectors as they are most intuitive for simplistic purposes.  

I won't cover Dirac notation in detail, but just know that |0> is the qubit state of 0, represented by the matrix: [0, 1] and |1> is the inverse. 
Therefore this equation states that any rotation around the Bloch sphere is representable by plugging θ or ϕ into this equation.

In classical computation, at the very basic level, computation is the manipulation of 1's and 0's through logic gates. Some of the simplest being the and, or, !, xor, etc. Combinations of these gates manipulate information in such a way that these operations' add up to more and more complex information processing, from a half adder to a full adder, all the way up to full CPUs. Foundationally quantum computing is not so different. Quantum gates act on qubits to manipulate the information in them, and combining multiple gates allows you to perform more and more complex operations (although quantum mechanic specific rules apply to the computations, but we'll revisit that later). 

With that out of the way, it starts to emerge in which the way linear algebra is used to understand quantum computing. Since vectors are the basis of quantum computing, and vectors can be represented as matrices, it follows that the manipulation of these vectors can be visualized as matrix operations (mainly multiplication) on the qubit vectors. 


Quantum computing includes all of the classical gates of classical computing, plus new quantum gates These can all be represented as matrices.

![image](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Quantum_Logic_Gates.png/488px-Quantum_Logic_Gates.png)

So to perform the operation of an x gate operating on a qubit with a classical 0 state, we would take the vector product of the x gate and the 0 qubits represented as matrices:

![image](https://i.ibb.co/8sN9cWq/xgate.png)

If you do the math, you'll see that if you input a 1 vector you get 0, and if you input a 0 vector you get 1. Perfectly analogous to the classical X gate!

With this demonstrated, we can now see that the entirety of quantum computing is merely a form of applied linear algebra, and can technically be done on paper if you wish to be that inefficient.

So let's introduce our very first quantum gate: The Hadamard gate. The Hadamard gate has the matrix:
![image](https://i.ibb.co/YTGk0Rh/hadarmard.png)

This is our first truly quantum gate. This gate allows us to move away from the poles of the Bloch sphere, and into the rest of the 2d vector space. Operating the Hadamard gate upon the 0 or 1 state pushes the vector into a superposition of the 0 and 1 state. I will explain some of the quantum mechanics later but in quantum computing superposition is mathematically just a linear combination.

As a matrix the Hadamard gate is:
(1/√2) * |1, 1|  
         |1,-1|

We can see now multiply the H matrix by the 0 state to see the rotation it performs on the 0 vector.

(1/√2) * |1, 1| * |1|              | 1|
         |1,-1|   |0|   = (1/√2) * |-1|

or written in dirac notation as: (|0> + |1>)/√2 or simply |+>

Conversely multiplying the H gate by the 1 state gets us (|0> - |1>)/√2 or |->

This can also be represented as a rotation of π about the Z-axis, then π/2 about the Y-axis. Visually, in the Bloch sphere it is:

![image](https://i.ibb.co/bmNfW95/hgatebloch.png);


So what does this mean?

This is where the nature of quantum mechanics really shines. In quantum mechanics, all particles are also waves, known as wave-particle duality. Quantum mechanics shows that the exact position or nature of a particle cannot be known directly (and is actually fundamentally random), and can only be represented as a probability. When quantum particles are observed, the wave function collapses and the particles collapse into the classical state 0 or 1. Therefore the superposition of a particle, represented by a vector in the Bloch sphere, is fundamentally a probability between the classical 0 and 1 states. The [1, 0] vector has a 100% chance of collapsing to the 0 states and the [0, 1] vector has a 100% probability of collapsing to the 1 state. 

The Hadamard gate is therefore a superposition of the 0 and 1 state, with an equal probability of collapsing into either state.

This leads us to an important rule. To find the probability of measuring a state |ϕ> in the state |x> we can use the following formula.
p(|x>) = |<x|ϕ>|^2

where <x| is the conjugate transpose of |x>

So let's do the math and find the probability of measuring |0> after applying the H gate to the 0 state:

(1/√2) * |1, 1| * |1|       |1/√2 |  
         |1,-1|   |0|    =  |-1/√2|

**running out of characters and notation is getting confusing, | will continue to be reserved for brackets and does not mean the absolute value of

p(|x>) = (absolute value of <1/√2|ϕ>|)^2
                            -1/√2|     

**apply conjugate transpose of |x> to get <x|


|<1√2, -1/√2||1|    = |1√2|
             |0|    

**take absolute value and sqaure 
1√2^2 = 1/2

You can use this formula to determine the probability of measuring the 0 state, and it will be 1/2.
Conversely, the probability will be 1/2 if you apply the H gate to the 1 state. This means the H gate gives us an equal probability of 0 or 1 when it is applied to any classical state.

A state acted upon by an H gate and then another H gate also returns the same value of the original state, in other words, the H gate * H gate is equal to the identity matrix.

**Note: The H gate is also unitary, that is its inverse is equal to its conjugate transpose. This is true of all quantum gates. This is required because of the normalization condition, which states that the probabilities of measuring two states must add up to one (or 100%). This is because, as we saw before the amplitude of state vectors is directly related to their probabilities. Algeabraicly rearranging our prior most formula gets us the formula:
√(|a|^2 + |b|^2) = 1

Any state vector that did not fulfill this formula would have a probability of collapsing into the 0 or 1 state that was not equal to 100 percent, and therefore logically impossible. Only unitary matrices fulfill this condition.

Multi Qubit Systems:
Quantum Circuits can operate using more than one circuit at a time. Each path assigned to a qubit is called a quantum wire, and it can visually display the sequence of operations operating upon each qubit, and the interactions of the qubits with each other.

This is an example visualization in the IBM Qisket environment. 

![image](https://i.ibb.co/GpYNPym/visualization.png)

Each Q(n) represents a different quantum wire, which qubits travel upon, and are operated upon by quantum gates. These gates can interact, which leads us into the next gate required for understanding the bell state.

The CNOT gate is a gate that is explicitly multi-qubit related. To understand the interactions of multi-qubit systems, we must expand on the Dirac notation and the mathematics of these systems. 

We've seen single qubis stored in the form: |a> = a[1, 0] + b[0, 1], which gives us the amplitude of the state vector of the qubit.
We can expand this notation to include multiple qubits, such as:

|a> = a00|00> (finish this later)

We can describe the collective state of two qubits by taking the tensor product of both qubits

(show visualization)

This is where our next gate, the CNOT gate, comes in. 

The Controlled Not Gate functions as both a not gate and a communication mechanism between different quantum wires in a quantum circuit. It operates by designated the first qubit in the quantum gate as a control qubit. If this qubit has a value of 0, the value of the target qubit (the qubit on the connected wire) will not be modified. If the control qubit has a state of 1, the gate will act as a NOT gate targeting the target qubit, inverting the value of this qubit. The matrix representation, visual representation, and visual states are shown below.

(CNOT Gate Visualization, etc)

The Bell state:
With all of this information, let's move into a common multi-qubit circuit. With this circuit we can elaborate on another set of quantum phenomena quantum computing takes advantage of. What would happen if we were to combine a quantum wire with a Hadamard gate, and a controlled not connected this wire to another immediately after?

(Show visualization)

The statevector of the q0 and q1 qubit can be represented according to this notation:

|100>

If we apply the Hadamard gate to the q0 qubit, we get this output:

|00> ---> (|100> + |110>)/√2

The q0 qubit is put into the superposition of the 0 and 1 state, while The q1 qubit is initially unaffected, due to the placement of the H gate.

Since the statevector of the qubits is as demonstrated above (with the one-state flipped as |10>) The CNOT gate is activatable due to the control qubit being set. This means that the control qubit inverses the state of the target qubit, represented as below:

(100> + |110>)/√2 --->  (100> + |111>)/√2

What we just saw is the quantum phenomena of entanglement.

 Entanglement in quantum mechanics is the entangled informational states of two quantum particles. This means that any state a particle has, its entangled pair will have the opposite state, no matter the distance. This is what Einstein referred to as "spooky action at a distance", referencing his distaste for information that seemed to outpace the speed of light.

 **Note, don't get too excited and think of an internet designed with quantum entanglement as the entanglement is contingent on the act of not measuring the quantum particle. Entanglement of quantum particles is broken as soon as a particle is measured, that is entanglement is only preserved in indeterminant states. 


 The bell state is a common circuit used to take advantage of something called superdense coding in quantum computing. This allows us to send multiple bits of information with just one qubit. The thought experiment goes something like this:

We start out with someone named Eve in a quantum laboratory: She sets up the circuit we just explored as below.

(show visualization.)

She then sends off the q0 qubit to Alice and the q1 qubit to Bob

(show this)

If alive receives the 00 state, she will apply the identity matrix gate (the identity matrix returns the same value as its input). If she receives the 01 state, she will apply the X gate. If she receives the 10 state, she applys a Z gate. If she receives a 11 state, she applies an X gate and then a Z gate. 

For reference, the Z gate functions as follows.
Z|0> = |0>
Z|1> = -|1>

(show visualization)

Bob and Alice's wires intercept when bob applies a CNOT gate and then an H gate, the reverse of the beginning circuit. We will then measure the states of the q0 and q1 qubits at the end, collapsing the statevectors into classical states.

(full visualization)

The full range of calculations is summarized as follows, although I will emit the majority of Dirac notation for the sake of succinctness. Feel free to do the full math if you like. 

(do the calculations as an html list)

The final measurement calculations allow you to infer the prior states of the qubits. This essentially allows you to store information at a higher informational density than in classical computing, hence the name "superdense coding". 

So why are entangled states so important for superdense coding, and furthermore for quantum computing in general? It is proven that any quantum algorithm that does not take advantage of entanglement can be more efficiently simulated on classical computers, but the exact reason is still unknown. The best approximate answer is that due to the orders of magnitude higher density of information available in quantum states, without delving deeply into these states the complexity is easier to handle on a classical computer in which the algorithm does not need the potential to explore these states. 

Phase Kickback:
Superdense coding leads us into a very important quantum computing phenomenon known as phase kickback. Phase kickback is an extension of the function of a CNOT gate. With a traditional CNOT gate, we have a gate that employs both a target and control qubit. Phase kickback shows us that the identity of target and control qubit is wholly interchangeable, with a CNOT acting on qubits in the states |-+> affecting what would inferentially be the control qubit. Many other gates such as the T Gate ( a rotational version of the CNOT gate where the pivot entry is instead e^iπ/4) employ phase kickback to define new quantum controlled operations that are useful for quantum computing. 

Putting it all Together: Defining Quantum Circuits:
Quantum circuits consist of three components:
- The initialization and reset stage.
- The quantum gate stage.
- The measurement stage
- The classical interpretation stage.

In essence, we first set the stage for our qubits. We must define the inputs we aim to push through the circuit so that we can compute a result. We then employ the quantum gates, measure the outcome, and then interpret these results classically. The classical component is employed both because quantum states are fragile and because we have already collapsed the wavefunction.

(show visualization)

Quantum computing employs all of these components to build full quantum circuits that can solve algorithms in a fraction of the time that classical computers do.

Thanks for reading all the way through. In my next article, I will attempt to create a quantum circuit that solves the Deutsch-Jozsa Algorithm. I will explain the math and implementation in detail.
