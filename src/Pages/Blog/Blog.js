import React from 'react';

const Blog = () => {
  return (
    <div className='mx-8'>
      <h1 className='text-4xl font-semibold'>Blog</h1>
      <div className='text-left card-body bg-base-200 rounded-md my-10 shadow-xl'>
        <div>
          <h3 className='card-title mb-3'>Difference between SQL and NoSQL</h3>
          <p>
            SQL databases use structured data with predefined schemas and a
            relational model, making them ideal for applications requiring
            complex queries and strong transactional integrity, such as
            financial systems and CRM applications. They use Structured Query
            Language (SQL) and typically scale vertically. Popular SQL databases
            include MySQL, PostgreSQL, Microsoft SQL Server, and Oracle
            Database. In contrast, NoSQL databases handle structured,
            semi-structured, and unstructured data with flexible, schema-less
            models like document, key-value, column-family, and graph formats.
            They are designed for horizontal scaling, making them suitable for
            big data applications, real-time web apps, content management
            systems, and IoT applications. Notable NoSQL databases include
            MongoDB, Cassandra, Redis, and Neo4j. While SQL databases are best
            for structured data and complex queries, NoSQL databases excel in
            flexibility, scalability, and handling large-scale, dynamic data.
          </p>
        </div>
        <div>
          <h3 className='card-title mb-3'>
            What is JWT, and how does it work?
          </h3>
          <p>
            JSON Web Token (JWT) is a compact, URL-safe means of representing
            claims to be transferred between two parties, encoded as a JSON
            object. A JWT consists of three parts: a header containing metadata
            about the token and signing algorithm, a payload with claims about
            the user and additional data, and a signature to verify the token's
            integrity. Upon user authentication, a server generates a JWT, which
            the client stores and includes in subsequent requests for
            authorization. The server validates the JWT by checking its
            signature and claims, ensuring the token's validity. JWTs are
            advantageous due to their compact size, self-contained nature, and
            statelessness, making them suitable for web and mobile applications.
            Security considerations include token confidentiality, integrity,
            expiry, and secret key management.
          </p>
        </div>
        <div>
          <h3 className='card-title mb-3'>
            What is the difference between javascript and NodeJS?
          </h3>
          <p>
            JavaScript is a high-level, interpreted programming language
            primarily used for client-side scripting to create interactive web
            pages, running within browsers like Chrome and Firefox. It
            manipulates the DOM and works with HTML and CSS to build dynamic
            websites, with access to browser APIs such as document and window.
            Node.js, on the other hand, is a runtime environment built on
            Chrome's V8 JavaScript engine, enabling JavaScript to be executed on
            the server-side. It allows for server-side scripting, handling file
            I/O, networking, and database operations, making it suitable for
            building scalable network applications and APIs. Node.js includes
            its own set of APIs for server-side tasks and supports asynchronous
            programming, enhancing JavaScript's capabilities beyond the browser
            environment.
          </p>
        </div>
        <div>
          <h3 className='card-title mb-3'>
            How does NodeJS handle multiple requests at the same time?
          </h3>
          <p>
            Node.js handles multiple requests simultaneously using an
            event-driven, non-blocking I/O model. When a request is received,
            Node.js places it into an event queue and immediately moves on to
            the next request, without waiting for the previous one to complete.
            The event loop, a core component of Node.js, continuously monitors
            the event queue and processes these requests as they become ready,
            delegating operations like file I/O, network communications, and
            database interactions to background threads provided by the libuv
            library. This allows Node.js to efficiently handle a large number of
            concurrent requests with a single-threaded architecture by
            leveraging asynchronous callbacks and promises to manage operations
            that would typically block the execution in a synchronous
            environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
