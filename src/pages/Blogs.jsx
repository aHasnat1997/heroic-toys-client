import { useTitle } from "../hooks/useTitle";
import q1 from '../assets/blogs/q1.png';
import q2 from '../assets/blogs/q2.jpg';
import q3 from '../assets/blogs/q3.png';
import q4 from '../assets/blogs/q4.png';


const Blogs = () => {
  useTitle('Blog');
  return (
    <section className="max-w my-16 flex flex-col gap-8">
      <h1 className='text-center text-4xl md:text-8xl mb-8'>Blogs</h1>
      <div className="card lg:flex-row bg-base-100 shadow-xl overflow-hidden">
        <img className="lg:w-1/2" src={q1} alt="Album" />
        <div className="card-body text-justify">
          <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
          <p><span className="font-bold underline">Access Token</span>: An access token is a credential that represents the authorization granted to a client (such as a mobile app or a web application) to access specific resources on a server. It is typically a string of characters that is issued by an authentication server after successful authentication and authorization.</p>
          <p>Once the client obtains an access token, it includes it in each subsequent request to the server, typically in the Authorization header or as a query parameter. The server then validates the access token to ensure it is valid and has the necessary permissions to access the requested resource. If the token is valid, the server allows the client to access the protected resource.</p>
          <p><span className="font-bold underline">Refresh Token</span>: A refresh token is a long-lived credential that is used to obtain a new access token once the previous one expires. It is typically issued along with the access token and is sent to the client securely and stored securely on the client-side.</p>
          <p>When the access token expires, the client sends the refresh token to the authorization server, usually through a dedicated API endpoint. The server verifies the refresh token and, if valid, generates a new access token and returns it to the client. This process is known as token refreshing.</p>
          <p>Refresh tokens are typically long-lived and have a longer expiration time than access tokens. They are securely stored on the client-side to prevent unauthorized access. Storing them securely can involve techniques like encrypting them, storing them in a secure cookie, or using secure storage mechanisms provided by the platform (such as Keychain on iOS or SharedPreferences on Android).</p>
        </div>
      </div>
      <div className="card lg:flex-row-reverse bg-base-100 shadow-xl overflow-hidden">
        <img className="lg:w-1/2" src={q2} alt="Album" />
        <div className="card-body text-justify">
          <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
          <span className="font-bold">1. Data Model:</span>
          <ul className="list-disc ml-8">
            <li>SQL databases use a structured data model based on tables with predefined schemas. They enforce a rigid structure and support relationships between tables through primary and foreign key constraints.</li>
            <li>NoSQL databases offer various data models, including key-value, document, columnar, and graph. They provide flexibility by allowing schema-less data and do not enforce rigid relationships between entities.</li>
          </ul>
          <span className="font-bold">2. Query Language:</span>
          <ul className="list-disc ml-8">
            <li>SQL databases use the SQL query language for data manipulation and retrieval. SQL offers a standardized syntax for querying and managing relational databases.</li>
            <li>NoSQL databases have diverse query languages. For example, document databases may use JSON-based queries, key-value stores use simple key-based operations, and graph databases use graph traversal languages.</li>
          </ul>
          <span className="font-bold">3. Use Cases:</span>
          <ul className="list-disc ml-8">
            <li>SQL databases are well-suited for applications with structured data and complex relationships, such as financial systems, e-commerce platforms, and content management systems.</li>
            <li>NoSQL databases excel in scenarios where flexibility, scalability, and high performance are essential. They are commonly used in real-time analytics, content caching, IoT data storage, and applications dealing with unstructured or rapidly changing data.</li>
          </ul>
        </div>
      </div>
      <div className="card lg:flex-row bg-base-100 shadow-xl overflow-hidden">
        <img className="lg:w-1/2" src={q3} alt="Album" />
        <div className="card-body text-justify">
          <h2 className="card-title">What is express js? What is Nest JS?</h2>
          <span className="font-bold">Express.js:</span>
          <ul className="list-disc ml-8">
            <li>Express.js is a minimalistic and unopinionated web framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js is known for its lightweight nature, allowing developers to have fine-grained control over the application's structure and routing.</li>
            <li>It offers a set of basic features and middleware functions to handle HTTP requests, define routes, and process data. However, developers need to manually handle many aspects like error handling, dependency injection, and structure organization.</li>
            <li>Express.js has a large and active community, making it easy to find resources, middleware, and third-party libraries to extend its functionality. It's a popular choice for building small to medium-sized applications that require simplicity and flexibility.</li>
          </ul>
          <span className="font-bold">Nest.js:</span>
          <ul className="list-disc ml-8">
            <li>Nest.js is a progressive, opinionated, and full-featured web application framework for Node.js. It is built with TypeScript and takes advantage of its features like static typing, decorators, and metadata to provide a structured and scalable architecture for server-side applications.</li>
            <li>Nest.js is heavily influenced by Angular's concepts and design patterns, such as modules, controllers, services, and dependency injection. It encourages the use of TypeScript decorators to define routes, middleware, validation, and more.</li>
            <li>The framework provides built-in features like dependency injection, declarative routing, middleware support, data validation, and powerful module management. It also integrates well with other libraries and frameworks, making it suitable for large-scale applications with complex requirements.</li>
          </ul>
        </div>
      </div>
      <div className="card lg:flex-row-reverse bg-base-100 shadow-xl overflow-hidden">
        <img className="lg:w-1/2" src={q4} alt="Album" />
        <div className="card-body text-justify">
          <h2 className="card-title">What is MongoDB aggregate and how does it work ?</h2>
          <span className="font-bold">1. Data Model:</span>
          <p>In MongoDB, the 'aggregate' function is used to perform advanced data aggregation operations on the documents within a collection. It allows you to process and transform data, perform calculations, and apply various operations to retrieve meaningful results from your data set.</p>
          <p>The 'aggregate' function utilizes the aggregation framework, which provides a flexible and powerful way to work with data. It consists of a pipeline of stages that you can chain together to define the sequence of operations to be performed on the documents.</p>
          <p>Each stage in the pipeline performs a specific operation on the data and passes the results to the next stage. Here are some commonly used stages:</p>
          <ul className="list-decimal ml-8">
            <li>$match: Filters documents based on specified criteria, similar to the find operation.</li>
            <li>$group: Groups documents together based on a specified key and allows you to perform aggregations on the grouped data, such as counting, summing, averaging, etc.</li>
            <li>$project: Modifies the structure of the documents by specifying the fields to include or exclude, renaming fields, creating new computed fields, etc.</li>
            <li>$sort: Sorts the documents based on one or more fields.</li>
            <li>$limit: Limits the number of documents in the result set.</li>
            <li>$skip: Skips a specified number of documents from the result set.</li>
          </ul>
        </div>
      </div>


    </section>
  );
};

export default Blogs;
