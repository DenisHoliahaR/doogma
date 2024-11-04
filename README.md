<h1>
<strong>Summary of Findings: Approaches for Downscaling Images with Fabric.js</strong> <br></br>  
</h1>
When downscaling images using Fabric.js, it’s essential to consider methods that maintain the image's quality, particularly for images with fine
details like thin and thick diagonal lines. Below are the top approaches for downscaling images, including their pros and cons. <br></br>

1. Direct Scaling Using Fabric.js Methods
Description: This method involves using Fabric.js’s built-in scale property on the fabric.Image object. <br></br>

Pros:
- Simple to implement and requires minimal code.
- Utilizes Fabric.js's internal scaling algorithms.
- Direct manipulation of the image properties.
  
Cons:
- May not maintain quality well, especially when scaling down significantly.
- Limited control over anti-aliasing and other image quality settings. <br></br> <br></br>

2. Using Canvas Rendering Context
Description: Create an off-screen canvas, draw the original image at its full size, and then scale it down when drawing to the main canvas. <br></br>

Pros:
- More control over the rendering process, allowing for custom scaling.
- Potentially better quality than direct scaling as it can leverage the browser's scaling algorithms.

Cons:
- More complex to implement than direct scaling.
- Requires additional code for handling the off-screen canvas and drawing. <br></br> <br></br>

3. Using CSS Transformations
Description: Utilize CSS transformations to scale down the canvas or its containing elements. <br></br>

Pros:
- Allows for responsive designs as the CSS can adjust dynamically with viewport changes.
- Easy to apply, leveraging CSS properties like transform: scale().

Cons:
- Can lead to distortions, especially if the aspect ratio is not maintained.
- Less control over how the image is rendered within the canvas context. <br></br> <br></br>

4. Image Smoothing Techniques
Description: After downscaling the image using either Fabric.js methods or canvas methods, apply smoothing algorithms such as bilinear or bicubic interpolation. <br></br>

Pros:
- Can significantly enhance the quality of the downscaled image.
- Smoothing helps to preserve fine details and reduce artifacts in images. <br></br>

Cons:
- Requires additional processing and may increase rendering time.
- More complex implementation, depending on the smoothing method used. <br></br> <br></br>

5. Using External Libraries for Image Processing
Description: Utilize external libraries (like sharp, jimp, or others) to preprocess images before loading them into Fabric.js. <br></br>

Pros:
- Libraries are often optimized for quality and performance, providing advanced features.
- Can handle complex tasks such as format conversion and quality adjustments. <br></br>

Cons:
- Introduces additional dependencies into the project.
- Adds complexity to the workflow, as images must be processed before use. <br></br> <br></br>


6. Dynamic Resolution Scaling
Description: Adjust the resolution based on the canvas size or the amount of detail required for the display. <br></br>

Pros:
- Provides flexibility by automatically adjusting the resolution based on the canvas size.
- Can optimize performance by reducing the size of images not visible or relevant to the current view. <br></br>

Cons:
- Complexity in determining the appropriate resolution.
- May require significant custom logic to implement effectively. <br></br> <br></br>

  
<h3>
<strong>Conclusion</strong>
</h3>
When choosing a method for downscaling images with Fabric.js, it's crucial to balance simplicity and control over image quality. For applications
where fine detail is critical, methods involving off-screen canvases or external libraries may be preferable despite their complexity. CSS 
transformations offer ease of use but come with the risk of distortions. Ultimately, the choice of method will depend on the specific requirements 
of the project and the importance of image quality in the application. <br></br>

While developing this test task, I encountered some interesting subtasks and bugs (one of them can be seen after using css scaling). 
It was interesting to try to make a project using regular html css js, after using React and Next for a long time, I felt a little
confused, but I managed to adapt quickly. It was interesting to try to configure webpack to build the project.  <br></br>

Regarding the implementation of the main task, scaling. I chose 4 techniques from those described above: scaling with css, normal scaling,
scaling with smoothing and using an offset canvas. I managed to implement the first three, but the fourth one was difficult, or rather, 
an error occurred after caching the image. I didn't have time to fix it, I think it would have taken another half an hour or so. <br></br> 

As it was written in the report with the pros and cons, scaling using the css is very inconvenient. Since I use a single canvas and just 
switch the scaling types, there are unpleasant consequences after using this type of scaling. I would avoid this method in a production 
project. <br></br>

I also created the functionality to add images to the canvas, and there were no difficulties with this. <br></br>

I used AI to save time and to avoid writing some parts of the code manually. As expected, a lot of things had to be reworked or adjusted
to our requirements. It's a very useful thing for solving bugs. <br></br>

I kept the structure of the project simple, and placed additional functions in the helpers folder. Not much more can be said about the structure.
