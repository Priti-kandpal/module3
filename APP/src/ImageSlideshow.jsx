function ImageSlideshow() {
  const images = [
    "https://picsum.photos/400/200?1",
    "https://picsum.photos/400/200?2",
    "https://picsum.photos/400/200?3",
  ];

  const [index, setIndex] = useState(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Image Slideshow</CardTitle>
      </CardHeader>

      <CardContent className="text-center space-y-3">
        <img src={images[index]} className="mx-auto rounded-md" />

        <div className="flex justify-center gap-3">
          <Button
            variant="outline"
            onClick={() =>
              setIndex((index - 1 + images.length) % images.length)
            }
          >
            Previous
          </Button>

          <Button
            onClick={() =>
              setIndex((index + 1) % images.length)
            }
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
