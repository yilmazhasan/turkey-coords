# For City coordinates, Rest-API

This API contains city (il) informations in Turkey. City geolocation (lat-lon , polygon (poligon) and boundingbox) are included. 
(Enlem-boylam, polygon ve box bilgileri)

** Service endpoint: https://turkey-coords.herokuapp.com

## Contents
* [Service Usage](#service)
    * [Cities (/cities)](#cities)
* [Data Model](#dataModel)
    * [City(İl)](#dataModelCity)


<a name="service"></a>
# Service Usage

**For all endpoints "fields, skip, limit" are allowed as query strings.**

City > Towns > Districts > Neighborhoods


<a name="cities"></a>
## İller (/cities)
All 81 cities information are listed as json array. Default fields are only _id ve name.

```
[
    {
        "_id":"ce941560c5a7ba9ff5cd24f5f9d75065",
        "name":"İstanbul",
        "towns": [],
        "geolocation": {
        	"lat": "",
        	"long": "",
        	"polygons": [],
        	"boundingbox": []        	
        }
    },
    ...
]
```
-----

<a name="dataModel"></a>
## Data Model

<a name="dataModelCity"></a>
### İl (City)
| Alan | Tip | Açıklama |
| ------ | ------ | ------ |
| _id | string | Şehir id|
| name | string | Şehir ismi |
| towns | array | İlçe id listesi |
| geolocation | object | Enlem-boylam, polygon ve box bilgileri |

Lisans
-------

    MIT License

    Copyright (c) 2018 Hasan Yılmaz

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
