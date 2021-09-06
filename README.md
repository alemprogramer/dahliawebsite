2021-09-06 01:58:11 PM
React project has been transferred to typescropt template. i'm merging all files here.

2021-09-06 02:23:41 PM

File merged of public and src root

02:39:43 PM

typescript version of react router has installed

02:45:02 PM

34 components; Alem, complete all js of pages folder. I'll handle components,context,data. once done, I'll start on pages folder too.


<code> onChange={(e) => {
              setRange(e.target.value);
              e.target.style.backgroundSize = `${range}% 100%`;
            }} </code>

            converted into 
<code>
             onChange={(e: React.FormEvent&lt;HTMLInputElement&gt;) => {
              setRange((e.target as any).value);
              (e.target as any).style.backgroundSize = `${range}% 100%`;
            }}
</code>


03:30:44 PM

removeLastcontainer.tsx left