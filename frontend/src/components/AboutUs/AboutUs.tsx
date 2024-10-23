import ContactUs from "./ContactUs";
import DiffCard from "./DiffCard";

export default function AboutUs() {
  const config = [
    {
      id: 1,
      title: "Curated Selection",
      content:
        "We handpick nurseries that meet our high standards for quality, sustainability, and customer service.",
      img: "https://s3-alpha-sig.figma.com/img/0f16/5b61/5f2672d76837d14ffe20598519949d2c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DtymLwlpyufszp5YJ-JYk0Y4GhjemTWdwLauGGXnupsG959t5zc6b-Q0prc6LZp6UiFYqIBQq9fZBTSA3cG7j3bDbYPMYjgdwAYcbZEWJUh~jE-~p7dF0wmGOtb7RyF35XkAoZnmbLjBJKh3YQaoW~vmmxUsHCR1XhqNK5Kvcp3~WP9g7~XLw1DvRJ62smoUmdJ9ZeWlMNOheEfYardAybT0uhhOo1MjVQg70fWBvuLRL57d4QkVXWgIaEHZ4va7VieIv9K0-imVEZmpXaN8a7Cgn947gK6UN6iAE~hKAYUoXgApwQ~1OK6g4znSe89TnqVE8j-zCt2pnNmAysbReA__",
    },
    {
      id: 2,
      title: "Direct from Growers",
      content:
        "We work directly with nurseries, ensuring that the plants you buy are fresh and healthy, straight from the growers to your doorstep.",
      img: "https://s3-alpha-sig.figma.com/img/3fdf/3d13/f152397e0d9fb046d9c8bd87976ce102?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qWcX9ilqcwSQs0t3Og2OCWepuQ2SvvKJVXwHgDCrylLOIFNczrAOLP1l07bpaho6wWyCNv57T4XFF0ehBITe0RLaXw~Y72pZd7LloOuYc1LTfwl9cFxntyW7n74UrG9pvqLasq4P2~7oE~V9dW6UztptvIGrsBOWtaIN-Vh6CVn8enxM~xmhzxnvsjeSk9iDor8zFi5BWhACSA7PK11XuljXr3SmB4NsT4NkIByAwRZVBzSG0GG5c3Lj~550mvJcQOGHaM9~zWscyOHVcFkC9DgYyW5Cjt2dQ-qPwwNyOWrY5fdubsJTqHGHul7UCMFqn6vdv0cbQHqTPsVKogt17w__",
    },
    {
      id: 3,
      title: "Nationwide Reach",
      content:
        "Our platform connects you with nurseries from coast to coast, making it easy to find unique plants and support local businesses.",
      img: "https://s3-alpha-sig.figma.com/img/5a02/8abb/ab1827f19091c31f5119a7e197252e85?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zg6AXBgZzFT-DF-Fheimi-cm7PY6B2Pag5FHLaCoQGqktja0Mo4J4Zv4BLUyNH9DC-91zqeamYSRrxxTS1~CpqXNC2LaiGnhw7TDcyxh-UKmYnRYgZnKFrCylI1z-OcfYpbEeLLMiCJiJjLlVPA15-jJm0hhGLpYS3kA5c46xzY9B-FGjlvXpo3A2RJtSyhzH8CdX3235NSLYODMdsTTagJnTYaBoMciMyp3cf16hudRiCxVTaXNwfxpRlfC~vDuERO6kswl4Bw2RmmCVuRziQNG0uFj4za1loL2QwIUJbQu7JasakdICwTAXJRVkkukZO2rxMwb8RxNv7XUbub7tw__",
    },
    {
      id: 4,
      title: "Personalized Experience",
      content:
        " With detailed product descriptions and Augmented reality, you can confidently choose the right plants for your space. ",
      img: "https://s3-alpha-sig.figma.com/img/44a2/c265/94b80c5c247414aee9f6b1ef406fa404?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FWE17H5u3INCX7cvvdaF0nUqCNbscx9TCzRUB8poYT84ndlwjA6CZLNLkZ7GhwFqmBWTT5b8ROkzBdr-4UrgJRObEh4-qObR3CTBMajnOQvc5ltRiXTiE4ICpKrxliOSE-4WZKYzAcM0JmxszAH~6G6UYAz4VwNp~96nBjeFLPTgJD6gVkKGQZ19smhENB9L6-A7kpZnT1TC1fLHavKj56wBgGyRbd9eEgaI1LH9jynkB4W8dLGKvsSMWma848Jn6vIxIxthpT19kdcKJefdwh96XTZ5FqWnkrZDQMuP2uYhb-Ad4q1f2f8I5MsQ0RNZIfFJteXQbxzPZpE18hR1TA__",
    },
  ];
  return (
    <div className="pt-10 px-[4vw] flex flex-col gap-y-16">
      <div>
        <h2 className="font-Philosopher text-[#2E4E1B] text-3xl mb-4">
          Our Mission
        </h2>
        <p className="font-Poppins">
          At Shop Your Nursery, we are passionate about making it easy for you
          to discover, purchase, and enjoy plants. Whether you're an experienced
          gardener, a home decor enthusiast, or new to the plant world, we
          connect you with local and independent nurseries offering a diverse
          selection of vibrant, healthy plants—from ornamental trees and shrubs
          to indoor houseplants and seasonal flowers. we help you find exactly
          what you need, all in one place.{" "}
        </p>
      </div>
      <div className="flex flex-col gap-y-12">
        <h2 className="font-Philosopher text-[#2E4E1B] text-3xl mb-4">
          What Makes Us Different?
        </h2>
        {config.map((item) => (
          <DiffCard key={item.id} item={item} />
        ))}
      </div>
      <div className="px-[5vw] py-10 my-10 flex justify-center">
        <ContactUs />
      </div>
    </div>
  );
}
