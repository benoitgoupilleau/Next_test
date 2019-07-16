import Layout from '../components/Layout';

const Index: React.FC = () => (
  <Layout>
    <h1 data-testid="page-title">Home page</h1>
    <p data-testid="text">Welcome to your coding test 💻 Your tasks will be to:</p>
    <ul>
      <li>Create a new page that you will call "Blog"</li>
      <li>Fetch all the blog posts from the following API: https://servertest-bgoupilleau.herokuapp.com</li>
      <li>Display all blog posts in the blog page (title, text, image and date when they are available). The posts will have to be sorted by date</li>
      <li>Add whatever you think should be added. But don't forget to tell us what and why</li>
    </ul>
    <p>Note that the image of each blog is served by the API. The key "src" of each post indicates the endpoint on the API</p>
    <p>Example: "src: 'mypicture.png' means that the picture source is https://servertest-bgoupilleau.herokuapp.com/mypicture.png</p>
    <p>Once you are done. Please send us back a zip of your repository</p>
    <p>See you soon!</p>
  </Layout>
);

export default Index;