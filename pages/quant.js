import Layout from '../components/Layout'
import Jumbotron from 'react-bootstrap/Jumbotron'
import quantum from '../styles/quantum.module.css'
import Container from 'react-bootstrap/Container'
const Quant = ({ title, description, ...props }) => {
  return (
      
    <>

      <Layout pageTitle={`${title} | Introduction to Quantum Computing`} description={description}>
              
      <Jumbotron className={quantum.jumbo} fluid>
      <Container>
        <h1>Introduction to Quantum Computing</h1>
        <p>
          Explanation of the Bell State, Superdense coding, and much more.
        </p>
      </Container>
    </Jumbotron>
        <div className={quantum.par}>
        <p>*NOTE: This article requires basic familiarity with python, quantum mechanics, linear algebra, and bra-ket/Dirac notation to fully understand. 
        You can of course follow along without it, but you may have to do extra research to understand the math and the notation. 
        I will provide some useful links to understand these concepts below.</p>

<p><a href="https://www.youtube.com/watch?v=z8c4WIjcCRM&ab_channel=AndrewDotson">Basic Dirac Notation for Intellectuals</a></p>
<p><a href="https://www.khanacademy.org/math/linear-algebra">Linear Algebra Course</a></p>
<br></br>
<h2>The Bloch Sphere</h2>
<p>Quantum computing provides a distinct advantage over classical computing because of the dimensions in which information can be stored and manipulated. In classical computing the fundamental building blocks of information, the bit, are binary. Either 1 or 0. In quantum computing, this information model is expanded exponentially as we instead represent each bit (known as a qubit) as a vector in the two-dimensional complex plane. The vector can stretch in any direction between a maximum value of 0 on one axis, and a maximum value of 1 on the other axis. The complex plane then functions as a rotational medium through which the vector can be transposed for more computationally efficient operations. This is represented visually as the Bloch sphere:</p>

<img className={quantum.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bloch_sphere.svg/220px-Bloch_sphere.svg.png"></img>


<p>All states are representable by the equation: |q{'>'} = cos(θ/2)|0{'>'} + e^(iϕ)sin(θ/2)1{'>'}
where θ and ϕ are real numbers. </p>

<p>** Note: all states can be represented as a[1, 0] + b[0, 1] where a and be are any real number since the 0 and 1 vector form an orthonormal basis. Quantum states can be expressed in this form with any pair of orthonormal vectors, but we will stick to the 0 and 1 vectors as they are most intuitive for simplistic purposes.</p>

<p>I won't cover Dirac notation in detail, but just know that |0{'>'} is the qubit state of 0, represented by the matrix: [0, 1] and |1{'>'} is the inverse. 
Therefore this equation states that any rotation around the Bloch sphere is representable by plugging θ or ϕ into this equation.</p>

<p>In classical computation, at the very basic level, computation is the manipulation of 1's and 0's through logic gates. Some of the simplest being the and, or, !, xor, etc. Combinations of these gates manipulate information in such a way that these operations' add up to more and more complex information processing, from a half adder to a full adder, all the way up to full CPUs. Foundationally quantum computing is not so different. Quantum gates act on qubits to manipulate the information in them, and combining multiple gates allows you to perform more and more complex operations (although quantum mechanic specific rules apply to the computations, but we'll revisit that later). </p>

<p>With that out of the way, it starts to emerge in which the way linear algebra is used to understand quantum computing. Since vectors are the basis of quantum computing, and vectors can be represented as matrices, it follows that the manipulation of these vectors can be visualized as matrix operations (mainly multiplication) on the qubit vectors. </p>


<p>Quantum computing includes all of the classical gates of classical computing, plus new quantum gates These can all be represented as matrices.</p>

<img className={quantum.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Quantum_Logic_Gates.png/488px-Quantum_Logic_Gates.png"></img>

<p>So to perform the operation of an x gate operating on a qubit with a classical 0 state, we would take the vector product of the x gate and the 0 qubits represented as matrices:</p>

<img className={quantum.image} src="https://i.ibb.co/8sN9cWq/xgate.png"></img>

<p>If you do the math, you'll see that if you input a 1 vector you get 0, and if you input a 0 vector you get 1. Perfectly analogous to the classical X gate!</p>

<p>With this demonstrated, we can now see that the entirety of quantum computing is merely a form of applied linear algebra, and can technically be done on paper if you wish to be that inefficient.</p>

<p>So let's introduce our very first quantum gate: The Hadamard gate. The Hadamard gate has the matrix:</p>
<img className={quantum.image} src="https://i.ibb.co/YTGk0Rh/hadarmard.png"></img>

<p>This is our first truly quantum gate. This gate allows us to move away from the poles of the Bloch sphere, and into the rest of the 2d vector space. Operating the Hadamard gate upon the 0 or 1 state pushes the vector into a superposition of the 0 and 1 state. I will explain some of the quantum mechanics later but in quantum computing superposition is mathematically just a linear combination.</p>


<p>We can now multiply the H matrix by the 0 state to see the rotation it performs on the 0 vector.</p>

<img className={quantum.image} src="https://i.ibb.co/r43P3jX/matr.png"></img> <br></br> <br></br>

<p>Or written in dirac notation as: (|0{'>'} + |1{'>'})/√2 or simply |+{'>'}</p>

<p>Conversely multiplying the H gate by the 1 state gets us (|0{'>'} - |1{'>'})/√2 or |-{'>'}</p>

<p>This can also be represented as a rotation of π about the Z-axis, then π/2 about the Y-axis. Visually, in the Bloch sphere it is:</p>

<img className={quantum.image} src="https://i.ibb.co/bmNfW95/hgatebloch.png"></img>


<p>So what does this mean?</p>

<p>This is where the nature of quantum mechanics really shines. In quantum mechanics, all particles are also waves, known as wave-particle duality. Quantum mechanics shows that the exact position or nature of a particle cannot be known directly (and is actually fundamentally random), and can only be represented as a probability. When quantum particles are observed, the wave function collapses and the particles collapse into the classical state 0 or 1. Therefore the superposition of a particle, represented by a vector in the Bloch sphere, is fundamentally a probability between the classical 0 and 1 states. The [1, 0] vector has a 100% chance of collapsing to the 0 states and the [0, 1] vector has a 100% probability of collapsing to the 1 state. </p>

<p>The Hadamard gate is therefore a superposition of the 0 and 1 state, with an equal probability of collapsing into either state.</p>

<p>This leads us to an important rule. To find the probability of measuring a state |ϕ{'>'} in the state |x{'>'} we can use the following formula.</p>
<p>(|x{'>'}) = |{'<'}x{'|'}ϕ{'>'}|^2</p>

<p>where {'<'}x{'|'} is the conjugate transpose of |x{'>'}</p>

<p>So let's do the math and find the probability of measuring |0{'>'} after applying the H gate to the 0 state:</p>

<img className={quantum.image} src="https://i.ibb.co/JjKD8Tv/matr2.png"></img>
<br></br>&nbsp;

<p>(|x{'>'}) = (absolute value of {'<'}1/√2|ϕ{'>'}|)^2<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                       -1/√2|     </p>

<p>**apply conjugate transpose of |x{'>'} to get {'<'}x{'|'}</p>


<p>{'|<'}1√2, -1/√2||1|    = |1√2|<br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           |0|    </p>

<p>**take absolute value and sqaure </p>
<p>1√2^2 = 1/2</p>

<p>You can use this formula to determine the probability of measuring the 0 state, and it will be 1/2.</p>
<p>Conversely, the probability will be 1/2 if you apply the H gate to the 1 state. This means the H gate gives us an equal probability of 0 or 1 when it is applied to any classical state.</p>

<p>A state acted upon by an H gate and then another H gate also returns the same value of the original state, in other words, the H gate * H gate is equal to the identity matrix.</p>

<p>**Note: The H gate is also unitary, that is its inverse is equal to its conjugate transpose. This is true of all quantum gates. This is required because of the normalization condition, which states that the probabilities of measuring two states must add up to one (or 100%). This is because, as we saw before the amplitude of state vectors is directly related to their probabilities. Algeabraicly rearranging our prior most formula gets us the formula:</p>
<p>√(|a|^2 + |b|^2) = 1</p>

<p>Any state vector that did not fulfill this formula would have a probability of collapsing into the 0 or 1 state that was not equal to 100 percent, and therefore logically impossible. Only unitary matrices fulfill this condition.</p>
<br></br>
<h2>Multi Qubit Systems:</h2>
<p>Quantum Circuits can operate using more than one circuit at a time. Each path assigned to a qubit is called a quantum wire, and it can visually display the sequence of operations operating upon each qubit, and the interactions of the qubits with each other.</p>

<p>This is an example visualization in the IBM Qisket environment. </p>

<img className={quantum.image} src="https://i.ibb.co/GpYNPym/visualization.png"></img>

<p>Each Q(n) represents a different quantum wire, which qubits travel upon, and are operated upon by quantum gates. These gates can interact, which leads us into the next gate required for understanding the bell state.</p>

<p>The CNOT gate is a gate that is explicitly multi-qubit related. To understand the interactions of multi-qubit systems, we must expand on the Dirac notation and the mathematics of these systems. </p>

<p>We've seen single qubis stored in the form: |a{'>'} = a[1, 0] + b[0, 1], which gives us the amplitude of the state vector of the qubit.</p>
<p>We can expand this notation to include multiple qubits, such as:</p>

<img  className={quantum.image} src="https://i.ibb.co/qmY0GS9/matr3.png"></img>

<p>We can describe the collective state of two qubits by taking the tensor product of both qubits</p>

<img className={quantum.image} src="https://i.ibb.co/PGgKHn6/tensor.png"></img>

<p>This is where our next gate, the CNOT gate, comes in. </p>

<p>The Controlled Not Gate functions as both a not gate and a communication mechanism between different quantum wires in a quantum circuit. It operates by designated the first qubit in the quantum gate as a control qubit. If this qubit has a value of 0, the value of the target qubit (the qubit on the connected wire) will not be modified. If the control qubit has a state of 1, the gate will act as a NOT gate targeting the target qubit, inverting the value of this qubit. The matrix representation, visual representation, and visual states are shown below.</p>

<p>(CNOT Gate Visualization, etc)</p>
<img className={quantum.image} src="https://i.ibb.co/2qTkr23/cnot1.png"></img>
<img className={quantum.image} src="https://i.ibb.co/Kr8McmW/cnot2.png"></img>
<img className={quantum.image} src="https://i.ibb.co/xHkyxRr/cnot3.png"></img>
<br></br><br></br>
<h2>The Bell state:</h2>

<p>With all of this information, let's move into a common multi-qubit circuit. With this circuit we can elaborate on another set of quantum phenomena quantum computing takes advantage of. What would happen if we were to combine a quantum wire with a Hadamard gate, with a CNOT gate connected to this wire immediately after?</p>

<img className={quantum.image} src="https://i.ibb.co/vvnkfZ4/bellstate.png"></img>

<p>The statevector of the q0 and q1 qubit can be represented according to this notation:</p>

<p>|00{'>'}</p>

<p>If we apply the Hadamard gate to the q0 qubit, we get this output:</p>

<p>|00{'>'} ---{'>'} (|00{'>'} + |10{'>'})/√2</p>

<p>The q0 qubit is put into the superposition of the 0 and 1 state, while The q1 qubit is initially unaffected, due to the placement of the H gate.</p>

<p>Since the statevector of the qubits is as demonstrated above (with the one-state flipped as |10{'>'}) The CNOT gate is activatable due to the control qubit being set. This means that the control qubit inverses the state of the target qubit, represented as below:</p>

<p>(00{'>'} + |10{'>'})/√2 ---{'>'}  (00{'>'} + |11{'>'})/√2</p>

<p>What we just saw is the quantum phenomena of entanglement.</p>

<p>Entanglement in quantum mechanics is the entangled informational states of two quantum particles. This means that any state a particle has, its entangled pair will have the opposite state, no matter the distance. This is what Einstein referred to as "spooky action at a distance", referencing his distaste for information that seemed to outpace the speed of light.</p>

<p>**Note, don't get too excited and think of an internet designed with quantum entanglement as the entanglement is contingent on the act of not measuring the quantum particle. Entanglement of quantum particles is broken as soon as a particle is measured, that is entanglement is only preserved in indeterminant states. </p>
<br></br>
<h2>Superdense Coding</h2>
<p>The bell state is a common circuit used to take advantage of something called superdense coding in quantum computing. This allows us to send multiple bits of information with just one qubit. The thought experiment goes something like this:</p>

<p>We start out with someone named Eve in a quantum laboratory: She sets up the circuit we just explored as below.</p>

<img className={quantum.image} src="https://i.ibb.co/vvnkfZ4/bellstate.png"></img>

<p>She then sends off the q0 qubit to Alice and the q1 qubit to Bob</p>



<p>If alive receives the 00 state, she will apply the identity matrix gate (the identity matrix returns the same value as its input). If she receives the 01 state, she will apply the X gate. If she receives the 10 state, she applys a Z gate. If she receives a 11 state, she applies an X gate and then a Z gate. </p>

<p>For reference, the Z gate functions as follows.</p>
<p>Z|0{'>'} = |0{'>'}</p>
<p>Z|1{'>'} = -|1{'>'}</p>

<p>This visualized is:</p>

<img className={quantum.image} src="https://i.ibb.co/bHJy6Pb/super1.png"></img>

<p>Bob and Alice's wires intercept when bob applies a CNOT gate and then an H gate, the reverse of the beginning circuit. We will then measure the states of the q0 and q1 qubits at the end, collapsing the statevectors into classical states.</p>

<img className={quantum.image} src="https://i.ibb.co/yyHB3ND/super2.png"></img>

<p>If you perform the matrix operations, you get these outputs: </p>

<p>00 + 10 --{'>'} 00
<br></br>11 + 01 --{'>'} 01
<br></br>00 - 10 --{'>'} 10
<br></br>11 - 10 --{'>'} -11</p>

<p>** The negative on the -11 is unimportant, as it is a global phase and is therefore unobservable. When the probability calculation is performed the negative disappears.</p>

<p>The final measurement calculations allow you to infer the prior states of the qubits. This essentially allows you to store information at a higher informational density than in classical computing, hence the name "superdense coding". </p>

<p>So why are entangled states so important for superdense coding, and furthermore for quantum computing in general? It is proven that any quantum algorithm that does not take advantage of entanglement can be more efficiently simulated on classical computers, but the exact reason is still unknown. The best approximate answer is that due to the orders of magnitude higher density of information available in quantum states, without delving deeply into these states the complexity is easier to handle on a classical computer in which the algorithm does not need the potential to explore these states. </p>
<br></br>
<h2>Phase Kickback:</h2>
<p>Superdense coding leads us into a very important quantum computing phenomenon known as phase kickback. Phase kickback is an extension of the function of a CNOT gate. With a traditional CNOT gate, we have a gate that employs both a target and control qubit. Phase kickback shows us that the identity of target and control qubit is wholly interchangeable, with a CNOT acting on qubits in the states |-+{'>'} affecting what would inferentially be the control qubit. Many other gates such as the T Gate ( a rotational version of the CNOT gate where the pivot entry is instead e^iπ/4) employ phase kickback to define new quantum controlled operations that are useful for quantum computing. </p>
<img className={quantum.image} src="https://i.ibb.co/XzDKGHR/tgate.png"></img>
<br></br><br></br>
<h2>Putting it all Together: Defining Quantum Circuits:</h2>
<p>Quantum circuits consist of three components:</p>
<ul>
<li>The initialization and reset stage</li>
<li>The quantum gate stage</li>
<li>The measurement stage</li>
<li>The classical interpretation stage</li>
</ul>

<p>In essence, we first set the stage for our qubits. We must define the inputs we aim to push through the circuit so that we can compute a result. We then employ the quantum gates, measure the outcome, and then interpret these results classically. The classical component is employed both because quantum states are fragile and because we have already collapsed the wavefunction.</p>

<img className={quantum.image} src="https://i.ibb.co/1qFWxVT/algorithim.png"></img>
<br></br><br></br>
<p>Quantum computing employs all of these components to build full quantum circuits that can solve algorithms in a fraction of the time that classical computers do.</p>

<h2>Implementation:</h2> 
<p>There are a variety of different mediums through which one executes code for a quantum computer. We will be using IBM’s Quantum experience with the Qisket python library in this implementation. IBM Quantum Experience allows you to use Jupyter notebooks to create your circuits, and then either simulate the quantum circuits or send your code off to one of IBM’s physical quantum computers.</p>

<p>To start off, let’s build an Adder Circuit. We can create a new Jupyter notebook to run our code at <a href="https://quantum-computing.ibm.com/jupyter">quantum-computing.ibm.com/jupyter</a>.</p>

<p>In the first cell, we will need to import the entire Qisket library.</p>
<img className={quantum.image} src="https://i.ibb.co/MfV65Ty/inline1.png"></img>

<p>Firstly, we will create an object named qc_ha using the QuantumCircuit class with 4 qubits in the circuit, and 2 output bits.</p>

<code>Qc = QuantumCircuit(4,2)</code>

<p>If we want to initalize both qubits to the one state, we can apply an x gate to the 0th and 1st quantum bits. Use x gates to get whatever input bit you desire.</p>

<code>qc_ha.x(0)</code>
<code>qc_ha.x(1)</code>

<p>Then we will construct a barrier for visual purposes</p>
<code>qc_ha.barrier()</code>

<p>We will then create 2 CNOT gates</p>
<code>qc_ha.cx(0,2) ← spans from 0th qubit to 2nd qubit.</code>
<code>qc_ha.cx(1,2) ← spans from 1th qubit to 2nd qubit.</code>

<p>We will use an extend controlled not gate to measure the output of both input qubits.</p>
<code>qc_ha.ccx(0,1,3)</code>

<p>We will then extract the outputs.</p>
<code>qc_ha.measure(2,0)</code>
<code>q_ha.measure(3,1)</code>

<p>We can draw the circuit using .draw()</p>
<code>qc_ha.draw()</code>

<p>Altogether this looks like:</p>
<img className={quantum.image} src="https://i.ibb.co/VqgR9R7/inline2.png"></img>


<p>So what does this do?</p>
<p>This is a classical circuit that simply adds two bits together and expresses the value of this operation as two bits. This is one of the base circuits of computing and is how all computers perform addition! (in parallel of course).</p>

<p>We can input the 0 state for q0 and the 0 state for q1. All three CNOT gates then do not activate because the control qubits are not in the 1 state.  We then measure the output on the last two qubits as 00.</p>

<p>If we initialize the input states as 1 and 1, something interesting happens. The q0 qubit activates the controlled not gate, flipping the target qubit (q2) from a 0 to a one. The q1 qubit also activates the q2 qubit, flipping it back to a 0. The extended CNOT gate (known as a Toffoli) receives the q0 and q1 qubit, which suffices as control qubits and flip the state of the q4 qubit. Since we measure from q2 to q3, our output state is 10, or 2 in binary. We did it! We carried the one and added successfully. </p>

<p>It is left as an exercise to the reader to calculate the behavior of inputting a 01 or 10 state, but the output is as one would assume 1 + 0 is. </p>

<p>We can simulate and then plot the results of any operation within Qisket using the plot_historgram() function</p>

<code>counts = execute(qc_ha,Aer.get_backend('qasm_simulator')).result().get_counts()</code>
<code>plot_histogram(counts)</code>

<img className={quantum.image} src="https://i.ibb.co/M5VmcP2/inline3.png"></img>
<p>You can see from this that you have a 100% chance of being in the state that you have added, as the circuit is entirely classical. Now we will implement the Bell State in Qisket, and actually run it on a real quantum computer.</p>


<p>Now we can work on implementing our very first truly quantum circuit. We will implement the Bell State as a simple demonstration of truly quantum circuits, and use the IBM cloud computing environment to send the job to a real quantum computer for processing and analyze the results.</p>

<p>The implemenation of the Bell State is quite easy, as it is only two circuits. It follows the same initializaion, gate aplication, and measurement paradigm. </p>
<img className={quantum.image} src="https://i.ibb.co/kDh0d1W/bellstate2.png"></img>
<p>In the circuit composer, we can view the Bloch Sphere representation of the statevectors' probabilities upon measurement. We can also see these probabilities on a historgram.</p>
<img className={quantum.image} src="https://i.ibb.co/L0MctKM/inline5.png"></img>
<p>Under the jobs tab in the lefthand corner of IBM Quantum Expereince, we can also execute our circuit on a real IBM Quantum Computer.</p>
<img className={quantum.image} src="https://i.ibb.co/zWd6zHs/job.png"></img>
<p>This will then return the result of our code, with all the randomness of a real quantum computer.</p>
<img className={quantum.image} src="https://i.ibb.co/m9RvNN6/result.png"></img>
<p>We are done! You just coded and executed a quantum program on a real quantum computer!</p>
<p>Thanks for reading all the way through. The next article will be a walkthrough and explanation of the Deutsch-Jozsa Algorithm.</p>
<p>Links to my jupyter notebooks:</p>
<ul>
    <li><a href="http://s000.tinyupload.com/?file_id=86950391184987115939">Adder Circuit</a></li>
    <li><a href="http://s000.tinyupload.com/?file_id=93140539784963575694">Bell State</a></li>
</ul>
<img className={quantum.image} src="https://i.ibb.co/vLHnxBW/algorithm2.png"></img>
</div>





      </Layout>
    </>
  )
}












export default Quant

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}